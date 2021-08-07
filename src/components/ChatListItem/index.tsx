import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Avatar from '../Avatar'
import styles from './styles'

export default function index({ color }: { color: string }) {
    const { navigate } = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate("Chat")} style={styles.container}>
            <Avatar size={60} style={{ backgroundColor: color }} />
            <View style={styles.dataContainer}>
                <View style={styles.block}>
                    <Text style={styles.username}>Username</Text>
                    <Text style={styles.date}>date</Text>
                </View>
                <Text numberOfLines={1} style={styles.message}>Last message is send tyo you before i will</Text>
            </View>
        </TouchableOpacity>
    )
}
