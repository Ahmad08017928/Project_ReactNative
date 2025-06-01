import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BiodataScreen from '../screens/BiodataScreen';
import PercabanganScreen from '../screens/PercabanganScreen';
import VolumeBalokScreen from '../screens/VolumeBalokScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6a1b9a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Biodata" component={BiodataScreen} options={{ title: 'Biodata' }} />
      <Stack.Screen name="Percabangan" component={PercabanganScreen} options={{ title: 'Cek Nilai' }} />
      <Stack.Screen name="VolumeBalok" component={VolumeBalokScreen} options={{ title: 'Volume Balok' }} />
    </Stack.Navigator>
  );
}