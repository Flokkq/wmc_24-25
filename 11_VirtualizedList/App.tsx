import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/LogDetailScreen';

const Stack = createStackNavigator();

export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen  name="Home"   component={HomeScreen}  />
         <Stack.Screen  name="Detail" component={DetailScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
