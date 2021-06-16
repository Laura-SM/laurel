import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    height: 150,
    borderWidth: 2,
    borderColor: '#93B1A7',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 20,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
  },
  featuresContainer: {
    alignItems: 'flex-start',
    width: 180,
  },
  namesContainer: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  iconsContainer: {
    width: 180,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  iconContainer: {
    margin: 10,
  },
  boldText: {
    fontSize: 18,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginHorizontal: 5,
  },
});

export default styles;
