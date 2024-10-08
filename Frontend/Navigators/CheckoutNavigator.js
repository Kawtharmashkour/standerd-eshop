import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//Screens
import Checkout from '../screens/Cart/Checkout/Checkout';
import Payment from '../screens/Cart/Checkout/Payment';
import Confirm from '../screens/Cart/Checkout/Confirm';


function MyTabs () {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Shipping" component={Checkout}/>
            <Tab.Screen name="Payment" component={Payment}/>
            <Tab.Screen name="Confirm" component={Confirm}/>
        </Tab.Navigator>
    )
}

export default function CheckoutNavigator() {
    return (
        <MyTabs/>
    )
}