import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import UserForm from '../components/UserForm';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
export default function AddContactScreen({ navigation }) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [job, setJob] = useState('')
    const [error, setError] = useState()

    const isRequire = name && number && job
    const handleAddContact = async () => {

        if (!isRequire) {
            setError('Please fill all fields')
        } else {
            const ref = collection(db, 'contacts')
            await addDoc(ref, { name, number, job })
            setName('')
            setJob('')
            setNumber('')
            navigation.navigate('Contacts')
        }
    }
    return (
        <View style={{ flex: 1, marginHorizontal: 16, paddingTop: 40 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <AntDesign name="close" size={30} color={'grey'} onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 18, color: 'black' }}>New Contact</Text>
                <AntDesign name="check" size={30} color="grey" onPress={handleAddContact} />
            </View>
            <View style={{ marginTop: 50 }}>
                <UserForm nameIcon="user" placeholder="Name" value={name} onChangeText={setName} />
                <UserForm nameIcon="mobile1" placeholder="Phone Number" value={number} onChangeText={setNumber} />
                <UserForm nameIcon="home" placeholder="Metier" value={job} onChangeText={setJob} />
            </View>
            {error && <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}><MaterialIcons name="dangerous" size={30} color="red" /><Text style={{ color: 'red', fontSize: 18, marginLeft: 12 }}>{error}</Text></View>}
        </View >
    );
}
