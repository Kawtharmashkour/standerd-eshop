import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Left,
  Right,
  Text,
  H1,
  Container
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";
import * as action from "../../Redux/Actions/cartActions";

import { SCREEN_HIGHT, SCREEN_WIDTH } from "../../constants/ConstantValues";
import MainButton from '../../components/MainButton';
import CartItem from '../../components/CartItem';
import { SwipeListView } from "react-native-swipe-list-view";


const Cart = (props) => {
    var total=0;
    props.cartItems.forEach( cart => {
        return ( total += cart.product.route.params.item.price)
    })

  return (
    <>
      {props.cartItems.length ? (
        <Container>
            <>
          <H1 style={{ alignSelf: "center" }}>Cart</H1>
         <SwipeListView
            data={props.cartItems}
            renderItem={(data) => {
              return(
             <CartItem item={data} />
            )}}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity 
                style={styles.hiddenButton}
                onPress={() => props.removeFromCart(data.item)}
                >
                  <Icon name="trash" color={"white"} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
          <View style={styles.bottomContainer}>
              <Left>
                  <Text style={styles.price}>$ {total}</Text>
              </Left>
              <Right>
                  <MainButton style={styles.buttonStyle}
                  onPress={()=>{props.clearCart()}}>
                      Clear All
                  </MainButton>
              </Right>
              <Right>
                  <MainButton 
                  onPress={()=> props.navigation.navigate('Checkout')}
                  >
                    Checkout
                  </MainButton>
              </Right>
          </View>
          </>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>Your cart is empty</Text>
        </Container>
      )}
    </>
  );
};

// To map the state to the props
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
    return({
        clearCart : () => dispatch(action.clearCart()),
        removeFromCart : (item) => dispatch(action.RemoveFromCart(item))
    })
}

const styles = StyleSheet.create({
  emptyContainer: {
    height: SCREEN_HIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
    left: 0,
    backgroundColor: 'white'
},
price: {
    fontSize: 24,
    margin: 20,
    color: 'red'
},
    hiddenContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'row'
    },
    hiddenButton: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 25,
      height: 70,
      width: SCREEN_WIDTH / 1.2
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
