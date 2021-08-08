import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { firebase } from '../../../firebaseConfig';

const index = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        const { params }: any = useRoute()
        const { goBack } = useNavigation()
        const rtcProps = {
            appId: 'de596390260f4fe3b3b90dd02fa3f470',
            channel: params.chatRoom?.id,
        };

        const callbacks = {
            EndCall: () => firebase.firestore().collection('chatRoom').doc(params.chatRoom?.id).update({
                videoWaiting: false
            })
        };

        useEffect(() => {
            const videoCall = firebase.firestore().collection('chatRoom').doc(params.chatRoom.id).onSnapshot((response: any) => {
                if (response.data().videoWaiting === false) {
                    goBack()
                }
            })
            return () => {
                videoCall()
            }
        }, [])
        return <Com
            {...props}
            callbacks={callbacks}
            rtcProps={rtcProps}
        />
    }
    return wrapper
}

export default index
