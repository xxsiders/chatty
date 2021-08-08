import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import styles from './styles'

export default function index({ uri, size, style }: { uri?: string, size?: number, style?: any }) {
    return (
        <TouchableOpacity style={[styles.avatar, { width: size, height: size, backgroundColor: Colors.darkPink }, style]}>
            <Image style={[styles.image, size != undefined && { width: size * .7, height: size * .7 }]} source={{ uri: uri }} />
        </TouchableOpacity>
    )
}
