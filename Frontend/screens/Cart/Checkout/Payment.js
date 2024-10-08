import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, 
    Header, 
    Text, 
    Content, 
    ListItem, 
    Radio, 
    Right, 
    Left, 
    Picker, 
    Icon, 
    Body, 
    Title} from 'native-base';

import MainButton from '../../../components/MainButton';
import { SCREEN_WIDTH } from '../../../constants/ConstantValues';

const methods = [
    { name: 'Cash on Delivery', value: 1 },
    { name: 'Bank Transfer', value: 2 },
    { name: 'Card Payment', value: 3}
]

const paymentCards = [
    { name: 'Wallet', value: 1 },
    { name: 'Visa', value: 2 },
    { name: 'MasterCard', value: 3},
    { name: 'Other', value: 4}
]

const Payment = (props) => {
    const order = props.route.params;

    const [selected, setSelected] = useState();
    const [card, setCard] = useState();

    return(
        <Container>
            <Header>
                <Body>
                    <Title>Choose your payment method</Title>
                </Body>
            </Header>
            <Content>
                {methods.map((item, index) => {
                    return(
                        <ListItem key={item.name} onPress={() => setSelected(item.value)}>
                            <Left>
                                <Text>{item.name}</Text>
                            </Left>
                            <Right>
                                {/* used to prevent multi-selection */}
                                <Radio selected={selected == item.value}/> 
                            </Right>
                        </ListItem>
                    )
                })}
                {selected == 3 ? (
                    // selection of the sub-menu
                    paymentCards.map((c,index) => {
                    return (<View>
                        <ListItem icon key={c.name} onPress={() => setCard(c.value)}>
                            <Left><Icon name="card" /></Left>
                            <Body><Text>{c.name}</Text></Body>
                                <Right>
                                    <Radio selected={card == c.value}/>
                                </Right>
                         </ListItem>
                         </View>)})
                    // <Picker
                    // mode={"dropdown"}
                    // iosIcon={<Icon name={"arrow-down"} />}
                    // headerStyle={{ backgroundColor: 'orange' }}
                    // headerBackButtonTextStyle={{ color: '#fff' }}
                    // headerTitleStyle={{ color: '#fff' }}
                    // selectedValue={card}
                    // onValueChange={(x) => setCard(x)}
                    // >
                    //     {paymentCards.map((c,index) => {
                    //         return (
                    //             <Picker.item key={c.name} label={c.name} value={c.name}/>
                    //         )
                    //     })}
                    // </Picker>
                ) : null}
                <MainButton style={styles.buttonStyle}
                    onPress={()=> props.navigation.navigate("Confirm", {order})}
                    >
                      Confirm
                </MainButton>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    buttonStyle : {
        width: SCREEN_WIDTH * 0.75,
        
    }
})

export default Payment;