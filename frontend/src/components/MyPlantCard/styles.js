import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 165,
    height: 230,
    backgroundColor: '#93B1A7',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
  },
  image: {
    position: 'absolute',
    top: 0,
    width: 165,
    height: 165,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
  },
  text: {
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default styles;
