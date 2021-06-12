import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centralContainer: {
    alignItems: 'center',
  },
  imageText: {
    position: 'absolute',
    top: 125,
    left: 95,
    zIndex: 1,
    fontSize: 18,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 10,
    margin: 20,
    backgroundColor: '#E5E5E5',
  },
  featuresContainer: {
    width: 320,
    alignItems: 'flex-start',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    width: 250,
    height: 45,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 20,
    textAlignVertical: 'center',
    marginHorizontal: 10,
  },
});

export default styles;
