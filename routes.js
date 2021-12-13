import React from 'react';
import Photos from './components/index'
import {HomeScreen} from './components/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Routes = () => {
    
    return (
    
           <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Photos" component={Photos} />
           </Stack.Navigator>
       
    )
   
}
