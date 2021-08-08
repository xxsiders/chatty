import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ChatRoom } from '../../../Types'
import TimeTodayDate from '../../utils/TimeTodayDate'
import Avatar from '../Avatar'
import styles from './styles'

export default function index({ color, data }: { color: string, data: ChatRoom }) {
    const { navigate } = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate("Chat", {
            chatRoom: data
        })} style={styles.container}>
            <Avatar uri={data.user?.avatar} size={60} style={{ backgroundColor: color }} />
            <View style={styles.dataContainer}>
                <View style={styles.block}>
                    <Text style={styles.username}>{data.user?.name}</Text>
                    <Text style={styles.date}>{TimeTodayDate(data.lastMessageDate.seconds * 1000)}</Text>
                </View>
                <Text numberOfLines={1} style={styles.message}>{data.lasteMessage}</Text>
            </View>
        </TouchableOpacity>
    )
}
