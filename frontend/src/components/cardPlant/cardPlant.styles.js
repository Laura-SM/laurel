import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    margin: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#7a918d',
    opacity: 0.6,
    marginHorizontal: 20,
    width: 250,
    height: 55,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 10,
  },
  text: {
    fontSize: 22,
    marginHorizontal: 40,
    color: '#faf9f9',
    position: 'absolute',
    bottom: 35,
  },
});

export default styles;
