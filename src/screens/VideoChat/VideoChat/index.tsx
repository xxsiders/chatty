import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import AgoraUIKit from 'agora-rn-uikit';


export default function index(props: any) {

    return (
        <View style={styles.container}>
            <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} />
        </View>
    )
}
