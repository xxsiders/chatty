import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ChatRoom, User } from '../../../../Types'
import ChatList from '../../../components/ChatList'
import UserList from '../../../components/UserList'
import Colors from '../../../constants/Colors'
import styles from './styles'

export default function index(props: { chatList: Array<ChatRoom>, usersList: Array<User>, loading: boolean }) {

    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, { paddingTop: useSafeAreaInsets().top + 6 }]}>
                <Text style={styles.title}>Chat with your friends</Text>
                <UserList data={props.usersList} />
            </View>
            <View style={styles.contentContainer}>
                {props.loading ? <ActivityIndicator size='large' style={styles.loader} color={Colors.primary} /> : <ChatList data={props.chatList} />}
            </View>
        </View>

    )
}
