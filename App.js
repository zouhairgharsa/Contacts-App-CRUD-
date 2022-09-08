import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddContactScreen, ContactsScreen, DetailContactScreen } from './src/screens';


const RootStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <RootStack.Navigator screenOptions={{ headerShown: false }} >
        <RootStack.Group>
          <RootStack.Screen name="Contacts" component={ContactsScreen} />
          <RootStack.Screen name="Details" component={DetailContactScreen} />

        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="AddContact" component={AddContactScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;