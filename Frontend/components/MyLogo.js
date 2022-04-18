import React from 'react';
import { Image, StyleSheet, Dimensions} from 'react-native';
//import * as Animatable from 'react-native-animatable';


const screenwidth= Math.round(Dimensions.get('window').width);

const MyLogo = () => {
    return (
        
            <Image source={require('../assets/logosmall.png')} style={styles.logostyle}
                 resizeMode='contain'/>
    )
};

export default MyLogo;

const styles = StyleSheet.create({
    logostyle : {
        height : '100%',
        width : '100%'
    }
}); 