import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Content, Thumbnail, ListItem, Right, Body, Text, Left} from 'native-base';

const SearchedProducts = (props) =>{
    const { productsFiltered }  = props;

    return(
        // <>
        //     {
        //          productsFiltered.length > 0 ? ( (productsFiltered.map((i)=>{return <Text>{i.name}</Text>}))):null}
        // </>
        <Content style={{marginTop:40}}>
            {
                productsFiltered.length > 0 ? (
                    productsFiltered.map((item) =>{
                        return(
                            <ListItem
                            onPress={()=> props.navigation.navigate("ProductDetail",{item:item})}
                            key={item._id.ii}
                            avatar
                        >
                        <Left/>
                        <Body>
                            <Text style={{writingDirection:'rtl'}}>{ item.name }</Text>
                            <Text note style={{writingDirection:'rtl'}}>{ item.description }</Text>
                        </Body>
                        <Right>
                            <Thumbnail
                                source={{uri : item.image ? item.image :'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }} //if no image should put fake one
                            />
                        </Right>
                       
                        </ListItem>
                        )
                    })
                ) : ( // if 0 products
                    <View style={styles.center}>
                        <Text style={{ alignSelf : 'center' }}>
                            No product match the criteria
                        </Text>
                    </View>
                )}
        </Content>
    );
};

const styles = StyleSheet.create({
    center : {
        alignItems : 'center',
        justifyContent : 'center'
    }
});

export default SearchedProducts;