import React from 'react'
import { FlatList } from 'react-native'
import GenerateColors from '../../utils/GenerateColors'
import ChatListItem from '../ChatListItem'
import styles from './styles'
export default function index({ data }: { data: Array<any> }) {
    const avatarColors = GenerateColors(data.length)

    const renderItem = ({ item, index }: any) => {
        return <ChatListItem color={avatarColors[index]} />
    }
    return (
        <FlatList data={data}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        />
    )
}
