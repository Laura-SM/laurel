import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  subTitleText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  roundButton: {
    width: 60,
    height: 60,
    backgroundColor: '#B8E0D2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 20,
  },
});

export default styles;
