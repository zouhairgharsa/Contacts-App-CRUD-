import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FontAwesome, } from '@expo/vector-icons';

const Avatar = ({ size, color }) => {
    return (
        <View>
            <FontAwesome name="user-circle" size={size} color={color} />

        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({})