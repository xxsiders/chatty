import React, { useEffect, useState } from "react";
import { firebase, currentUserID } from '../../../firebaseConfig'

const index = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        const [chatList, setChatList]: any = useState([])
        const [usersList, setUsersList]: any = useState([])
        const [loading, setLoading] = useState(true)

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

        return <Com
            {...props}
            chatList={chatList}
            loading={loading}
            usersList={usersList}
        />
    }
    return wrapper
}

export default index
