import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item, Picker} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FormContainer from '../../../Shared/Form/FormContainer';
import Input from '../../../Shared/Form/Input';
import MainButton from '../../../components/MainButton';
import {SCREEN_WIDTH} from '../../../constants/ConstantValues';

import { connect } from 'react-redux';

const Checkout = (props) =>{
    const [ orderItems, setOrderItems ] = useState();
    const [ address1, setAddress1 ] = useState();
    const [ address2, setAddress2 ] = useState();
    const [ city, setCity ] = useState();
    const [ zip, setZip ] = useState();
    const [ country, setCountry ] = useState();
    const [ phone, setPhone] = useState();
    const [ user, setUser ] = useState()

    useEffect(() => {
        setOrderItems(props.cartItems);

        return () => {
            setOrderItems();
        }
    },[])

    const proceedCheckout = () => {
        console.log("orders", orderItems)
        let order = {
            city,
            country,
            dateOrdered: Date.now(),
            orderItems,
            phone,
            shippingAddress1: address1,
            shippingAddress2: address2,
            status: "3",
            user,
            zip,
        }

        props.navigation.navigate("Payment", {order: order })
    }

    return(
        <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
        >
            <FormContainer
            title="Shipping Address">
                <Input
                    placeholder={"Phone"}
                    name={"phone"}
                    value={phone}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setPhone(text)}
                />
                   <Input
                    placeholder={"Shipping Address 1"}
                    name={"ShippingAddress1"}
                    value={address1}
                    onChangeText={(text) => setAddress1(text)}
                />
                   <Input
                    placeholder={"Shipping Address 2"}
                    name={"ShippingAddress2"}
                    value={address2}
                    onChangeText={(text) => setAddress2(text)}
                />
                   <Input
                    placeholder={"City"}
                    name={"city"}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                />
                   <Input
                    placeholder={"Zip Code"}
                    name={"zip"}
                    value={zip}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setZip(text)}
                />
                {/* <View style={{ width: '80%', alignItems: "center" }}> */}
                    {/* <Button title="Confirm" onPress={() => proceedCheckout()}/> */}
                    <MainButton style={styles.buttonStyle}
                    onPress={()=> proceedCheckout()}
                    >
                      Confirm
                  </MainButton>
                {/* </View> */}
            </FormContainer>
        </KeyboardAwareScrollView>
    )
}

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems,
    }
}

const styles = StyleSheet.create({
    buttonStyle :{
        width : SCREEN_WIDTH * 0.75
    }
})

export default connect(mapStateToProps)(Checkout)