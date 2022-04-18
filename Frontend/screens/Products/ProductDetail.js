import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { Container, Body, Left, H1 } from 'native-base';
import { Toast } from 'react-native-toast-message';

import Colors from '../../constants/Colors';
import MainButton from '../../components/MainButton';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

const ProductDetail = (props) =>{

    const [ item, setItem ] = useState(props.route.params.item);
    const [ availability, setAvailability ] = useState('');

    return(
        <Container style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image 
                    source={{uri : item.image ? 
                        item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
                    resizeMode='contain'
                    style={styles.image}/>
                </View>
                <View style={styles.bottomContainer}>
                <Left>
                    <H1>{item.price}</H1>
                </Left>
                <Body>
                    <H1>{item.name}</H1>
                    <Text>{item.brand}</Text>
                </Body>
                {/* <Right/> */}
                </View >
                    <MainButton 
                    style={styles.buttonStyle}
                    onPress={()=>{
                        props.addItemToCart(props),
                        Toast.show({
                            topOffset: 60,
                            type: "Success",
                            text1: `${item.name} added to your cart`,
                            text2: "Go to you cart to complete order"
                        })
                    }}>
                        <Text>Add to Cart</Text>
                    </MainButton>
            </ScrollView>
        </Container>
    )

}

// Dispatch props to state
const mapDispatchToProps = (dispatch)=>{
    
    return({
        addItemToCart : (product)=> dispatch(actions.addToCart({quantity:1, product})),
        dispatch
    })
}

const styles = StyleSheet.create({
    container : {
        position : 'relative',
        height : '100%'
    },
    imageContainer : {
        shadowColor: Colors.primary,
        shadowOpacity: 0.26,
        shadowOffset: { width: 5, height: 5 },
        shadowRadius:3,
        elevation: 5,
        //position : 'absolute',
        height : 450,
        width : '100%',
        borderBottomLeftRadius : 30,
        borderBottomRightRadius : 30,
        backgroundColor : 'white',
        padding : 0,
        margin : 0,
        alignItems : 'center',
        justifyContent : 'center'
    },
    image : {
        width : '100%',
        height : '100%'
    },
    bottomContainer : {
        flexDirection: 'row',
        marginVertical : 10,
        //position: 'absolute',
        //bottom: 0,
        //left: 0,
        //backgroundColor: 'white'
    },
    buttonStyle : {
        width:'90%',
    }
});

export default connect(null, mapDispatchToProps)(ProductDetail);