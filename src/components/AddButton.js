import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AddButton() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('AddContact')} style={{ padding: 10, backgroundColor: '#0d55d1', position: 'absolute', borderRadius: 40, bottom: 80, right: 50 }}>
            <AntDesign name="adduser" size={30} color="white" />
        </TouchableOpacity>
    );
}
