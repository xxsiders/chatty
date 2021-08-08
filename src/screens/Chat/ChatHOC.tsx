import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { firebase } from '../../../firebaseConfig';
import { useRefresh } from "../../hooks/RefreshProvider";

const index = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        const { navigate }: any = useNavigation()
        const [messages, setMessages]: any = useState([]);
        const [videoCallActive, setVideoCallActive]: any = useState(false);
        const { params }: any = useRoute()
        const { setrefreshing }: any = useRefresh()

        const onSend = useCallback((messages = []) => {
            firebase.firestore().collection('chatRoom').doc(params.chatRoom.id).collection('messages').add(messages[0])
            firebase.firestore().collection('chatRoom').doc(params.chatRoom.id).update({
                lastMessageDate: firebase.firestore.Timestamp.now(),
                lasteMessage: messages[0].text
            })
        }, [])


        useEffect(() => {
            const videoCall = firebase.firestore().collection('chatRoom').doc(params.chatRoom.id).onSnapshot((response: any) => {
                setVideoCallActive(response.data().videoWaiting)
            })
            const messagesSnapshot = firebase.firestore().collection('chatRoom').doc(params.chatRoom.id).collection('messages').orderBy('createdAt', 'desc').onSnapshot((response) => {
                const data = response.docs.map(item => {
                    return item.data()
                })
                setMessages(data)
            })
            return () => {
                videoCall()
                messagesSnapshot()
                setrefreshing(true)
            }
        }, [])

        const startVideoCall = () => {
            firebase.firestore().collection('chatRoom').doc(params.chatRoom?.id).update({
                videoWaiting: true
            }).then(() => navigate('VideoChat', {
                chatRoom: params.chatRoom
            }))
        }

        return <Com
            {...props}
            messages={messages}
            setMessages={setMessages}
            onSend={onSend}
            params={params}
            videoCallActive={videoCallActive}
            startVideoCall={startVideoCall}
        />
    }
    return wrapper
}

export default index
