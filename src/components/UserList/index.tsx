import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { User } from '../../../Types'
import Colors from '../../constants/Colors'
import GenerateColors from '../../utils/GenerateColors'
import Avatar from '../Avatar'
import styles from './styles'


export default function index({ data, createChatRoom }: { data: Array<User>, createChatRoom: (id: string) => void }) {
    const avatarColors = GenerateColors(data.length)
    const renderUser = ({ item, index }: { item: any, index: number }) => {
        if (item.searchIcon) {
            return <TouchableOpacity style={styles.searchIcon}>
                <Ionicons name='search' size={24} color={Colors.white} />
            </TouchableOpacity>
        }
        return <TouchableOpacity onPress={() => createChatRoom(item)} >
            <Avatar style={{ marginHorizontal: 4, backgroundColor: avatarColors[index] }} uri={item.avatar} size={45} />
        </TouchableOpacity>
    }

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            horizontal
            data={[{ searchIcon: true }, ...data]}
            renderItem={renderUser}
        />
    )
}
