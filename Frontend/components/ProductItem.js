import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
//import { SharedElement } from 'react-navigation-shared-element';

import Colors from '../constants/Colors';
import {SCREEN_WIDTH} from '../constants/ConstantValues';

const ProductItem = props => {
  const { name, price, image, countInStock } = props;
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp 
          onPress={()=>props.navigation.navigate("ProductDetail",{item:props})} 
          useForeground>
          <View>
            <View style={styles.imageContainer}>
            {/* <SharedElement id={ props.id }> */}
              <Image style={styles.image} source={{ uri : image ? 
                                          image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }} />
            {/* </SharedElement> */}
            </View>
            <View style={styles.details}>
              <Text style={styles.price}>{price.toFixed(2)}د.ع</Text>
              <Text style={styles.title}>{name.length > 15 ? name.substring(0, 15 - 3)
                                          + '...' : name
                                         }</Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: Colors.primary,
    shadowOpacity: 0.26,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 200,
    width: SCREEN_WIDTH/2-20,
    margin : 5
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    borderRadius : 10,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    //overflow: 'hidden'
  },
  image: {
    //...StyleSheet.absoluteFillObject,
    resizeMode : 'contain',
    width: '100%',
    height: '100%'
  },
  details: {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent : 'space-between',
    height: '20%',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 14,
   // marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  }
});



