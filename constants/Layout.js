import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const nbarHeight = height - 64;

export default {
  window: {
    width,
    height,
    nbarHeight
  },
  isSmallDevice: width < 375,
};
