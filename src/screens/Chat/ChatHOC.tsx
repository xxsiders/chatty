import React, { useCallback, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

const index = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        const [messages, setMessages]: any = useState([]);

        const onSend = useCallback((messages = []) => {
            setMessages((previousMessages: IMessage[] | undefined) => GiftedChat.append(previousMessages, messages))
        }, [])

        return <Com
            {...props}
            messages={messages}
            setMessages={setMessages}
            onSend={onSend}
        />
    }
    return wrapper
}

export default index
