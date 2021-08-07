import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { BubbleProps, Composer, GiftedChat, InputToolbar, InputToolbarProps, Send } from 'react-native-gifted-chat'
import Colors from '../../constants/Colors'
import ChatMessage from '../ChatMessage'
import styles from './styles'

export type CustomChatProps = {
    onSend: (message: any) => void,
    messages: Array<any>
}


export default function index({ messages, onSend }: CustomChatProps) {
    const renderInputToolbar = (props: InputToolbarProps) => {
        return <InputToolbar {...props} containerStyle={styles.inputContainer} renderSend={renderSend} />
    }

    const sameUserInPrevMessage = (MessageID: number, userID: number) => {
        let result = false;
        let currentIndex = messages.findIndex((i: any) => i._id == MessageID)
        if (currentIndex > 0) {
            messages[currentIndex - 1].user._id === userID ? result = true : result = false
        }
        return result
    }

    const renderBubble = (props: BubbleProps<any>) => {
        let messageBelongsToCurrentUser = props.user?._id == props.currentMessage.user._id;
        return <ChatMessage message={props.currentMessage} prevMessage={sameUserInPrevMessage(props.currentMessage._id, props.currentMessage.user._id)} isMyMessage={messageBelongsToCurrentUser} />
    }

    const renderSend = (props: any) => {
        return (
            <Send {...props} containerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name='arrow-forward-circle' size={28} color={Colors.primary} />
            </Send>
        );
    }

    const renderComposer = (props: any) => {
        return <Composer {...props} textInputStyle={styles.input} />
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={(messages: any) => onSend(messages)}
            user={{
                _id: 1,
            }}
            messagesContainerStyle={{ paddingHorizontal: '5%' }}
            renderBubble={renderBubble}
            renderInputToolbar={renderInputToolbar}
            renderAvatar={() => null}
            renderDay={() => null}
            alwaysShowSend
            wrapInSafeArea
            renderComposer={renderComposer}
            listViewProps={{
                showsVerticalScrollIndicator: false
            }}
        />
    )
}
