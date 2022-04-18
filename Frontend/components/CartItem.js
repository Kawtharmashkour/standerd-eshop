import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Body, Left, Right, Thumbnail, ListItem } from 'native-base';

import Colors from '../constants/Colors';

const CartItem = (props) => {
    const data = props.item.item;
    const [quantity, setQuantity ] = useState(props.item.item.quantity);

    return(
        <ListItem style={styles.listItem} key={Math.random()} avatar>
                <Body style={styles.body}>
                    <Left>
                        <Text>$ {data.product.route.params.item.price}</Text>
                    </Left>
                    <Right>
                        <Text>{data.product.route.params.item.name}</Text>
                    </Right>
                </Body>
                <Right style={{borderColor: 'transparent'}}>
                  <Thumbnail 
                    source={{
                      uri: data.product.route.params.item.image
                        ? data.product.route.params.item.image
                        : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                    }}
                  />
                </Right>
              </ListItem>
    )
}

const styles = StyleSheet.create({
    listItem : {
        alignItems : 'center',
        backgroundColor : Colors.background,
        justifyContent : 'center'
    },
    body : {
        margin : 10,
        alignItems : 'center',
        flexDirection : 'row'
    }
})

export default CartItem;