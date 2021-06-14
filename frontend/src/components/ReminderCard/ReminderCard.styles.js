import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    height: 250,
    borderWidth: 2,
    borderColor: '#93B1A7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
  },
  featuresContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
});

export default styles;
