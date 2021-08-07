import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomChat from '../../../components/CustomChat'
import styles from './styles'

export type ChatProps = {
    onSend: (message: any) => void,
    messages: Array<any>
}

export default function index(props: ChatProps) {
    const { goBack } = useNavigation()
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
                <Text style={styles.title}>Username</Text>
            </View>

            <View style={styles.contentContainer}>
                <CustomChat messages={props.messages} onSend={props.onSend} />
            </View>
        </View>
    )
}
