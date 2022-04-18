import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem, Badge, Text } from 'native-base';

import Colors from '../constants/Colors';

const CategoryFilter = (props) =>{

    return(
        <ScrollView
            bounce={true}
            horizontal={true}
            style={{backgroundColor:'121212'}}>
            <ListItem>
                <TouchableOpacity
                key={1}
                onPress={()=>{
                    props.categoryFilter('All'), props.setActive(-1)
                }}
                >
                    <Badge
                    style={styles.center, {margin:5},
                    props.active == -1 ? styles.active : styles.inactive
                    }
                    >
                    <Text style={{color:'white'}}>All</Text>
                    </Badge>
                </TouchableOpacity>
                {
                    props.categories.map((item,index)=>{
                        return(
                        <TouchableOpacity
                        key={index}
                        onPress={()=>{
                        props.categoryFilter(item._id), props.setActive(props.categories.indexOf(item))
                        }}
                        >
                            <Badge
                            style={[styles.center, {margin:5},
                            props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                            ]}
                            >
                                <Text style={{color:'white'}}>{item.name}</Text>
                            </Badge>
                </TouchableOpacity>
                     ) })
                }
            </ListItem>
            
        </ScrollView>
    )

};

const styles = StyleSheet.create({
    center : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    active :{
        backgroundColor : Colors.primary
    },
    inactive :{
        backgroundColor : Colors.primarylight
    }
});

export default CategoryFilter;