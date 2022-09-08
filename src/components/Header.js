import * as React from 'react';
import { Text, View } from 'react-native';

export default function Header({ numberOfContacts }) {
    return (
        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
            <Text style={{ fontSize: 24, fontWeight: '600' }}>Contacts</Text>

            <Text style={{ fontSize: 16, marginTop: 12, color: 'grey' }}>
                {numberOfContacts} contacts
            </Text>
        </View>
    );
}

