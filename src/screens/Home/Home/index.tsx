import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ChatList from '../../../components/ChatList'
import UserList from '../../../components/UserList'
import styles from './styles'

const dumData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default function index() {

    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, { paddingTop: useSafeAreaInsets().top + 6 }]}>
                <Text style={styles.title}>Chat with your friends</Text>
                <UserList data={dumData} />
            </View>
            <View style={styles.contentContainer}>
                <ChatList data={dumData} />
            </View>
        </View>

    )
}
