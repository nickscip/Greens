import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 150
  },
    imageContainer: {
    flex: 1,
    borderRadius: 8,
    
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  dotContainer: {
    paddingTop: 5,
    paddingBottom: 25
  },
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#1CA8FF',
  },
  inactiveDotStyle: {
    backgroundColor: '#808080',
  },
});
export default styles;