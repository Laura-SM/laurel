import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centralContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 250,
    borderRadius: 10,
    margin: 20,
  },
  featuresContainer: {
    width: 170,
    height: 250,
    justifyContent: 'space-around',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  subTitleText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#93B1A7',
    paddingBottom: 10,
  },
});

export default styles;
