import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'

export default function index() {
    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, { paddingTop: useSafeAreaInsets().top + 6 }]}>
            </View>
            <View style={styles.contentContainer}>

            </View>
        </View>

    )
}
