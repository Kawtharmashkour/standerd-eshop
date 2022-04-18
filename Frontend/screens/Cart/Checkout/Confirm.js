import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Thumbnail,
        Left,
        Right,
        Text,
        Body,
        ListItem } from 'native-base';

import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../constants/ConstantValues';
import MainButton from '../../../components/MainButton';
import CartItem from '../../../components/CartItem';

import { connect } from 'react-redux';
import * as actions from '../../../Redux/Actions/cartActions';

const Confirm = (props) => {
    const finalOrder = props.route.params;

    const confirmOrder = () =>{
      setTimeout(()=>{
        props.clearCart();
        props.navigation.navigate("Cart");
      },500)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
            {props.route.params ? (
              <View style={styles.borderContainer}>
                <Text style={styles.title}>Shipping to:</Text>
                <View style={{ padding: 8 }}>
                  <Text>Address: {finalOrder.order.order.shippingAddress1}</Text>
                  <Text>Address2: {finalOrder.order.order.shippingAddress2}</Text>
                  <Text>City: {finalOrder.order.order.city}</Text>
                  <Text>Zip Code: {finalOrder.order.order.zip}</Text>
                  <Text>Country: {finalOrder.order.order.country}</Text>
                </View>
                <Text style={styles.title}>Items:</Text>
                <>
                { finalOrder.order.order.orderItems.map((x)=>{
                  
                  return(
                    //<Text>{x.product.route.params.item.name}</Text>
                    <ListItem style={styles.listItem} key={x.product.route.params.item.name} avatar>
                      
                      <Body style={styles.body}>
                      <Left>
                        <Text>$ {x.product.route.params.item.price}</Text>
                      </Left>
                        <Right>
                          <Text>{x.product.route.params.item.name}</Text>
                        </Right>
                        <Right >
                          <Thumbnail source={{ uri: x.product.route.params.item.image }} />
                        </Right>
                      </Body>
                    </ListItem>
                  )
                })}
                </>
              </View>
            ) : null}
            <MainButton style={styles.buttonStyle}
                    onPress={confirmOrder}
                    >
                    Place order
            </MainButton>
          </View>
        </ScrollView>
      );
    };
    
    const mapDispatchToProps = (dispatch) => {
      return {
        clearCart: () => dispatch(actions.clearCart()),
      };
    };
    
    const styles = StyleSheet.create({
      container: {
        height: SCREEN_HIGHT,
        padding: 8,
        alignContent: "center",
        backgroundColor: "white",
      },
      titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
      },
      borderContainer: {
        borderWidth: 1,
        borderColor: "orange",
        //width: SCREEN_WIDTH * 0.75,
        borderRadius : 10,
        marginVertical: 10
      },
      title: {
        alignSelf: "center",
        margin: 8,
        fontSize: 16,
        fontWeight: "bold",
      },
      listItem: {
        alignItems: "center",
        //backgroundColor: "white",
        justifyContent: "center",
        width: SCREEN_WIDTH / 1.2
      },
      body: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        borderColor:'transparent',
      },
      buttonStyle:{
        width: SCREEN_WIDTH * 0.75
      }
    });
    
export default connect(null, mapDispatchToProps)(Confirm);