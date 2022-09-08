import * as React from 'react';
import { View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function UserForm({ nameIcon, placeholder, value, onChangeText, ...props }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <AntDesign name={nameIcon} size={28} color="grey" />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{
                    paddingHorizontal: 8,
                    borderBottomWidth: 1,
                    fontSize: 17,
                    paddingTop: 12,
                    paddingBottom: 8,
                    flex: 1,
                    ...props
                }}
                placeholder={placeholder}
                placeholderTextColor="grey"
            />
        </View>
    );
}
