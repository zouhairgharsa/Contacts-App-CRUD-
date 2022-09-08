import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Avatar from './Avatar';


export default function User({ rgbindex, onDelete, user }) {
    const { name, job, number } = user
    const navigation = useNavigation()
    const rbgCal = rgbindex * 10 + 5
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { rbgCal: rbgCal, name, job, number })}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                    flex: 1
                }}>
                <Avatar size={50} color={`rgba(${rbgCal * 3 + 100},${rbgCal * 2 + 100},${rbgCal},1)`} />
                <View style={{ marginLeft: 8, flex: 1 }}>
                    <Text style={{ fontSize: 17 }}>{name}</Text>
                </View>
            </TouchableOpacity>
            <Feather name="delete" size={24} color="red" onPress={onDelete} />

        </View>
    );
}
