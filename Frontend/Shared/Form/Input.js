import React from 'react';
import { Image ,TextInput, StyleSheet , Dimensions} from 'react-native';

import Colors from '../../constants/Colors';
// import sourceIconName from '../assets/nameIcon.png';
// import sourceIconPhone from '../assets/phoneIcon.png';
// import sourceIconEmail from '../assets/emailIcon.png';
// import sourceIconLock from '../assets/lockIcon.png';
import { View } from 'native-base';


const screenwidth= Math.round(Dimensions.get('window').width);

const Input = props => {

  // const sourceImageHandler = (iconName) => {

  //   switch (iconName){
  //     case 'nameIcon' : {return sourceIconName};
  //     case 'phoneIcon' : {return sourceIconPhone};
  //     case 'emailIcon' : {return sourceIconEmail};
  //     case 'lockIcon' : {return sourceIconLock}
  //   }
  // };
  
 return(
          <View style={styles.SectionStyle}>
          <TextInput writingDirection='rtl' width={'75%'} 
                     height={40} {...props}  
                     placeholder={props.placeholder}
                     name={props.name}
                    id={props.id}
                    value={props.value}
                    autoCorrect={props.autoCorrect}
                    onChangeText={props.onChangeText}
                    onFocus={props.onFocus}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
        />
          {/* <Image source={sourceImageHandler(props.iconfile)}
                  style={styles.ImageStyle}/> */}

        </View>
 )

};

export default Input;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.primarylight,
    height: 40,
    width : '75%',
    borderRadius: 24,
    marginBottom : screenwidth>350? 10 :5,
    paddingRight : 10
  },

  ImageStyle: {
    margin: 15,
    opacity : 0.75
  },
  // input: {
  //   height: 30,
  //   borderBottomColor: 'grey',
  //   borderBottomWidth: 1,
  //   marginVertical: 10
  // }
});

