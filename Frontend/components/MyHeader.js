import React  from 'react';
import { Image, View, StyleSheet } from 'react-native';
//import * as Animatable from 'react-native-animatable';


const MyHeader = () => {
    return(
        
        <View style={{...StyleSheet.absoluteFill}}>
        <Image source={require('../assets/headerpic.png')} style={styles.header}/>
        </View>
    
        )
};

export default MyHeader;

const styles = StyleSheet.create({
    header : {
      borderWidth : 2,
        position : 'absolute', 
        top: 0,
        width : '100%',
        height: 210,
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50
    }
});