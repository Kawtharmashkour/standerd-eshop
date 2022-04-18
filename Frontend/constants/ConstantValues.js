import { Dimensions } from 'react-native';

const  width = Math.round(Dimensions.get('window').width);
const  hight = Math.round(Dimensions.get('window').height);

export const SCREEN_HIGHT = hight;
export const SCREEN_WIDTH = width;