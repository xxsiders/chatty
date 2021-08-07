import React from 'react'
import { Text, View } from 'react-native'
import TimeTodayDate from '../../utils/TimeTodayDate'
import Avatar from '../Avatar'
import styles from './styles'

export type ChatMessageProps = {
    message: any;
    isMyMessage: boolean,
    prevMessage: boolean
}


export default function index({ message, isMyMessage, prevMessage }: ChatMessageProps) {
    return (
        <View style={[styles.message, isMyMessage && styles.myMessageBlock, prevMessage && { marginLeft: isMyMessage ? 0 : 35, marginBottom: -6 }]}>
            <View style={[styles.messageBlock, isMyMessage && styles.myMessageTextBlock]}>
                {!isMyMessage && !prevMessage && <Avatar size={35} />}
                <View style={[styles.messageContainer, isMyMessage ? styles.myMessageContainer : { borderBottomStartRadius: 4 }]}>
                    <Text style={styles.messageText}>{message.text}</Text>
                </View>
            </View>
            <Text style={styles.date}>{TimeTodayDate(message.createdAt)}</Text>
        </View>
    )
}
