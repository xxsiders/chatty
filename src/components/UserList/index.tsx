import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import GenerateColors from '../../utils/GenerateColors'
import styles from './styles'
import Avatar from '../Avatar'
import { User } from '../../../Types'


export default function index({ data }: { data: Array<User> }) {
    const avatarColors = GenerateColors(data.length)
    const renderUser = ({ item, index }: { item: any, index: number }) => {
        if (item.searchIcon) {
            return <TouchableOpacity style={styles.searchIcon}>
                <Ionicons name='search' size={24} color={Colors.white} />
            </TouchableOpacity>
        }
        return <Avatar style={{ marginHorizontal: 4, backgroundColor: avatarColors[index] }} uri={item.avatar} size={45} />
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
