import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { Container, Icon, Text, Input, Header, Item } from 'native-base';

import {SCREEN_HIGHT} from '../constants/ConstantValues';

import ProductItem from '../components/ProductItem';
import SearchedProducts from './Products/SearchedProducts';
import Banner from '../components/Banner';
import Colors from '../constants/Colors';
import CategoryFilter from '../components/CategoryFilter';
import baseURL from '../assets/common/baseURL';
import axios from 'axios';

//const data = require('../assets/data/products.json');
//const productCategories = require('../assets/data/categories.json');

const MainScreen = (props) =>{

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initSate, setInitState] = useState([]);
    const [loading, setLoading] =useState(true); //show loadong when no data

    useFocusEffect((
        useCallback(() => {
            setFocus(false);
        //setCategories(productCategories);
        setActive(-1);

        axios
            .get(`${baseURL}products`)
            .then((res)=>{
                setProducts(res.data);
                setProductsFiltered(res.data);
                setProductsCtg(res.data);
                setInitState(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log('Products API call error');
            })

        axios
            .get(`${baseURL}categories`)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log('Categories API call error');
            })

        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
            setCategories([]);
           // setProductsCtg([]);
            setActive();
            setInitState();
        }
        },[]))); //add [] to execute it once only when component mount and unmount 

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i)=> i.name.includes(text))
        );
    }

    const openList = ()=>{
        setFocus(true);
    }
    const onBlur = ()=>{
        setFocus(false);
    }

    const changeCtg = (ctg) => {
        //console.log('ctg value',ctg);
        ctg === 'All' ? [ setProductsCtg(initSate), setActive(true) ]
                      : [// console.log(products),
                          setProductsCtg(products.filter((i) =>{
                              //console.log('product value',i);
                              return i.category._id === ctg} ))
                            ,
                        setActive(true)
                        ];
    }

    return(
        <>
        { loading == false ? (
            <Container>
            {focus == true ? (
                <SearchedProducts 
                navigation={props.navigation}
                productsFiltered={productsFiltered}/>
            ) : (
                <ScrollView>
                {/* nestedScrollEnabled={true}  */}
                 {/* because I have a flatlist inside scrollview */}
                <View style={styles.container}>
                    <View>
                        <Banner/>
                    </View>
                    <View>
                        <CategoryFilter
                            categories={categories}
                            categoryFilter={changeCtg}
                            productsCtg={productsCtg}
                            active={active}
                            setActive={setActive}
                        />
                    </View>
                    {
                        productsCtg.length > 0 ? (
                            <View style={styles.listContainer}>
                                { 
                                    productsCtg.map((item, index)=>{
                                        console.log('Product Item  :  ',item);
                                        return(
                                            <ProductItem
                                            navigation={props.navigation}
                                            key={index}
                                            {...item}
                                            />
                                        )
                                    })
                                }
                            </View>
                        ) : (
                            <View style={[styles.center, { height: SCREEN_HIGHT / 2}]}>
                                <Text>No products found</Text>
                            </View>
                        )
                    }
                {/* Note Flatlist should replaced by .map method because not allowed flat list in scrollView  */}
                {/* <FlatList
                data = {productsCtg}
                renderItem = {({item})=> <ProductItem {...item}
                                            //onViewDetail={() => props.navigation.navigate('ItemDetail', {itemData})}
                                            //onAddToCart={() => {}}
                                            />
                                        }
                 keyExtractor = { item => item.name}
                numColumns={2}
                /> */}
                </View>
                </ScrollView>
            )
            }
             {/* <Header searchBar rounded> */}
             <View style={styles.searchbar}>
                <Item style={[{ borderColor: 'transparent' }, {flexDirection : 'row-reverse'}]}>
                <Icon name='ios-search'color='white' />
                  <Input placeholder='ابحث' 
                        onFocus={openList}
                        onChangeText={(text)=> searchProduct(text)}
                        style={{writingDirection : 'rtl'}}
                    />
                  {focus == true ? (
                      <Icon name='ios-close'
                            onPress={onBlur}
                            />
                  ) : null}
                </Item>
            </View>
            {/* </Header> */}
        </Container>
        ) : (
            // loading
            <Container style={styles.center}>
                <ActivityIndicator size={"large"} color={Colors.primary}/>
            </Container>
        )}
        </>       
    )
};

const styles = StyleSheet.create({
    container:{
        //flexWrap : 'wrap',
        backgroundColor : Colors.background
    },
    containerList:{
        width : '100%',
        flex : 1,
        flexDirection : 'row',
        alignItems : 'flex-start'
    },
    searchbar : {
        position:'absolute',
      justifyContent: 'center',
      backgroundColor: Colors.background,
      opacity : 0.50,
      borderWidth: 2,
      borderColor: Colors.primary,
      height: 30,
      width : '80%',
      borderRadius: 24,
      alignSelf: 'center',
      marginTop: 30
  
    },
    listContainer: {
        height: SCREEN_HIGHT,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: Colors.background,
      },
      center: {
          justifyContent: 'center',
          alignItems: 'center'
      }
  });

export default MainScreen;