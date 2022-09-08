import React, { } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Avatar, UserForm } from '../components';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import { useQueryByName } from '../hooks/useQueryByName';

export default function DetailContactScreen({ route }) {
    const navigation = useNavigation()
    const { rbgCal, name } = route.params;
    const { contact, setContact } = useQueryByName('contacts', name)



    const handleEditUser = async () => {
        const docRef = doc(db, "contacts", contact.id);
        await updateDoc(docRef, {
            name: contact.nameContact,
            number: contact.numberContact,
            job: contact.jobContact
        });




    }

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flex: 0.5,
                    backgroundColor: `rgba(${rbgCal + 100},${rbgCal + 50},${rbgCal},0.7)`,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <AntDesign
                    name="close"
                    size={40}
                    color="white"
                    style={{ position: 'absolute', top: 50, right: 30 }}
                    onPress={() => navigation.goBack()}
                />

                <View style={{ alignItems: 'center' }}>
                    <Avatar size={80} color='white' />
                    <Text
                        style={{
                            fontSize: 18,
                            marginTop: 12,
                            letterSpacing: 1.2,
                            fontWeight: '500',
                        }}>
                        {contact.numberContact}
                    </Text>
                </View>
            </View>
            <View>
                <View style={{ marginTop: 50, marginHorizontal: 12 }}>
                    <UserForm nameIcon="user" placeholder="Name" value={contact.nameContact} onChangeText={(text) => setContact({ ...contact, nameContact: text })} />
                    <UserForm nameIcon="mobile1" placeholder="Phone Number" value={contact.numberContact} onChangeText={(text) => setContact({ ...contact, numberContact: text })} />
                    <UserForm nameIcon="home" placeholder="Metier" value={contact.jobContact} onChangeText={(text) => setContact({ ...contact, jobContact: text })} />
                    <TouchableOpacity
                        onPress={handleEditUser}
                        style={{
                            marginTop: 24,
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'center',
                            backgroundColor: '#0d55d1',
                            padding: 12,
                            borderRadius: 12,
                        }}>
                        <AntDesign name="edit" size={24} color="white" />
                        <Text style={{ fontSize: 18, color: 'white', marginLeft: 8 }}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
