import React, { useState, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { SCREEN_HIGHT, SCREEN_WIDTH } from '../constants/ConstantValues';



const Banner = () => {
    const [ bannerData, setBannarData ] = useState([]);

    useEffect(()=>{
        setBannarData(['https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg',
    'https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg','https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg'])
    
    return() => setBannarData([]);
    },[]);

    return(
        <ScrollView>
                <View style={styles.swiper}>
                    <Swiper
                        dot={<View style={{backgroundColor:'#FFAFBA', width: 5, height: 5,borderRadius: 4, 
                        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 1}} />}
                        activeDotColor= '#FF6076'
                        dotColor='#FFAFBA'
                        style={{ height : SCREEN_HIGHT/3}}
                        showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={3}
                    >
                    {bannerData.map((item)=>{
                        return(
                            <Image
                            key={item}
                            style={styles.imageBanner}
                            resizeMode='cover'
                            source={{uri: item}}
                            />
                        )
                    })}
                    </Swiper>
                </View>
        </ScrollView>
    )   
}

const styles = StyleSheet.create({
    swiper : {
        width : SCREEN_WIDTH,
        alignItems : 'center'
    },
    imageBanner : {
        height : SCREEN_HIGHT/3,
        width : SCREEN_WIDTH
    }
});

export default Banner;