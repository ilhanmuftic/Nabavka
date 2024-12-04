import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GroupList from './src/screens/GroupList';
import GroupDetails from './src/screens/GroupDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GroupList" component={GroupList} options={{ title: 'Groups' }} />
        <Stack.Screen name="GroupDetails" component={GroupDetails} options={{ title: 'Shopping List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
