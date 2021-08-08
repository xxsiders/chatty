import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ChatRoom } from '../../../../Types'
import CustomChat from '../../../components/CustomChat'
import Colors from '../../../constants/Colors'
import styles from './styles'

export type ChatProps = {
    onSend: (message: any) => void,
    messages: Array<any>,
    params: {
        chatRoom: ChatRoom
    },
    videoCallActive: boolean,
    startVideoCall: () => void
}

export default function index(props: ChatProps) {
    const { goBack }: any = useNavigation()
    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, { paddingTop: useSafeAreaInsets().top + 6 }]}>
                <View style={styles.block}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Text style={styles.optionButton}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.optionButton}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.contentBlock, { marginHorizontal: '5%' }]}>
                    <Text style={styles.title}>{props.params.chatRoom.user?.name}</Text>

                    <View style={styles.contentBlock}>
                        <TouchableOpacity style={styles.searchIcon}>
                            <Ionicons name='call' size={20} color={Colors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.startVideoCall} style={[styles.searchIcon, props.videoCallActive && { backgroundColor: '#e74c3c' }]}>
                            <Ionicons name='videocam' size={20} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.contentContainer}>
                <CustomChat userAvatar={props.params.chatRoom.user?.avatar} messages={props.messages} onSend={props.onSend} />
            </View>
        </View>
    )
}
