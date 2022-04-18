import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '../../constants/ConstantValues';

const FormContainer = (props) => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text>{props.title}</Text>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop : 30,
        marginBottom : 400,
        width : SCREEN_WIDTH,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize : 30,
    }
});

export default FormContainer;