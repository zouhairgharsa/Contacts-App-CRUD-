import { deleteDoc, doc } from 'firebase/firestore';
import * as React from 'react';
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { AddButton, Header, User } from '../components';
import { db } from '../firebase/config';

import { useGetData } from '../hooks/useGetData';
export default function ContactsScreen({ navigation }) {


    const { data: contacts } = useGetData('contacts')
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'contacts', id))
    }

    if (contacts.length === 0) {
        return <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, }}><ActivityIndicator size="large" color="tomato" />
        </View>
    }
    return (
        <View style={{ flex: 1, paddingTop: 24 }}>
            <Header numberOfContacts={contacts.length} />
            <FlatList
                data={contacts}
                contentContainerStyle={{ marginTop: 24, paddingHorizontal: 16 }}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <User user={item} rgbindex={index} onDelete={() => handleDelete(item.id)} />
                )}
            />
            <AddButton />
        </View>
    );
}