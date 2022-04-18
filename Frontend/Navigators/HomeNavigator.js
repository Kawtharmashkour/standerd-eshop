import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import MainScreen from '../screens/MainScreen';
import ProductDetail from '../screens/Products/ProductDetail';

const Stack = createStackNavigator();

function MainStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{
                headerShown : false
            }}
            />
            <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
                headerShown : false
            }}
            />
        </Stack.Navigator>
    );
}

export default function HomeNavigator() {
    return(
        <MainStack/>
    )
}