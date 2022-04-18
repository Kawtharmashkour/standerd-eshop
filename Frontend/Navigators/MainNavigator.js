import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constants/Colors';
import CartIcon from '../components/CartIcon';

//Stacks
import HomeNavigator from '../Navigators/HomeNavigator';
import CartNavigator from '../Navigators/CartNavigator';
import UserNavigator from './UserNavigator';

const Tab = createBottomTabNavigator();

const MainNatvigator = () => {

    return(
        <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
            style:{
                shadowColor: Colors.primary,
                elevation : 2,  // Android shadow 
                shadowOffset: { height: -2, width:-1 }, // IOS
                shadowOpacity: 0.3, // IOS
                shadowRadius: 1,
                borderTopLeftRadius:50, 
                borderTopRightRadius:50,
                backgroundColor: Colors.background,
                position:'absolute',
               // bottom: 0,
                padding:10,
                width: '100%',
                height: 54,
                //zIndex: 8 
            },
            keyboardHidesTabBar : true, //to hide tabBar when keyboard appear
            showLabel : false,
            activeTintColor : Colors.primary
        }}
        >
            <Tab.Screen
            name="User"
            component={UserNavigator}
            options={{
                tabBarIcon : ({color}) => {
                    return(
                        <Icon
                    name="user"
                    style={{ position:'relative' }}
                    color={color}
                    size={30}
                    />
                    )
                }
            }}
            />
            <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
                tabBarIcon : ({color}) => {
                    return(
                        <Icon
                    name="home"
                     color={color}
                     size={30}
                    />
                    )
                    
                }
            }}
            />
            <Tab.Screen
            name="Admin"
            component={HomeNavigator}
            options={{
                tabBarIcon : ({color}) => {
                    return(
                        <Icon
                    name="cog"
                    color={color}
                    size={30}
                    />
                    )
                }
            }}
            />
            <Tab.Screen
            name="Cart"
            component={CartNavigator}
            options={{
                tabBarIcon : ({color}) => {
                    return(
                        <View>
                            <Icon
                            name="shopping-cart"
                            color={color}
                            size={30}
                            />
                            <CartIcon/>
                        </View>
                    )
                    
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default MainNatvigator;