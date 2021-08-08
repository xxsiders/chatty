import React from 'react'
import { FlatList } from 'react-native'
import { ChatRoom } from '../../../Types'
import GenerateColors from '../../utils/GenerateColors'
import ChatListItem from '../ChatListItem'
import styles from './styles'
export default function index({ data }: { data: Array<ChatRoom> }) {
    const avatarColors = GenerateColors(data.length)

    const renderItem = ({ item, index }: { item: ChatRoom, index: number }) => {
        return <ChatListItem data={item} color={avatarColors[index]} />
    }
    return (
        <FlatList data={data}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        />
    )
}
