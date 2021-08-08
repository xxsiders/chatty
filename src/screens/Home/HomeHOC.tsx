import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { firebase, currentUserID } from '../../../firebaseConfig'
import { User } from "../../../Types";
import { useRefresh } from "../../hooks/RefreshProvider";

const index = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        const [chatList, setChatList]: any = useState([])
        const [usersList, setUsersList]: any = useState([])
        const [loading, setLoading] = useState(true)
        const { refreshing, setrefreshing }: any = useRefresh()
        const { navigate }: any = useNavigation()

        const fetchChatList = async () => {
            const response = await firebase.firestore().collection('chatRoom').orderBy('lastMessageDate', 'desc').where('users', 'array-contains', currentUserID).get()
            response.docs.map(async (item: any) => {
                const partnerID = item.data().users.filter((user: string) => user !== currentUserID)[0]
                const userResponse = await firebase.firestore().collection('users').doc(partnerID).get()
                const newData: any = {
                    ...item.data(),
                    user: userResponse.data()
                }
                setChatList((prevPosts: any) => [...prevPosts, newData])
            })
            setLoading(false)
            setrefreshing(false)
        }

        const fetchUsersList = async () => {
            const list: any[] = []
            const response = await firebase.firestore().collection('users').where('uid', '!=', currentUserID).get()
            response.docs.map(async (item: any) => {
                list.push(item.data())
            })
            setUsersList(list)
        }

        useEffect(() => {
            fetchChatList()
            fetchUsersList()
        }, [])

        useEffect(() => {
            if (refreshing) {
                setChatList([])
                fetchChatList()
            }
        }, [refreshing])

        const createChatRoom = (user: User) => {

            const roomData = {
                createdAt: firebase.firestore.Timestamp.now(),
                lastMessageDate: firebase.firestore.Timestamp.now(),
                lasteMessage: '',
                users: [user.uid, currentUserID],
                videoWaiting: false,
                id: ''
            }
            firebase.firestore().collection('chatRoom').add(roomData).then(response => firebase.firestore().collection('chatRoom').doc(response.id).update({ id: response.id }).then(() => {
                navigate('Chat', {
                    chatRoom: { ...roomData, id: response.id, user }
                })
            }))
        }

        return <Com
            {...props}
            chatList={chatList}
            loading={loading}
            usersList={usersList}
            createChatRoom={createChatRoom}
        />
    }
    return wrapper
}

export default index
