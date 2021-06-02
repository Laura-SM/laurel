import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#D6EADF',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 60,
  },
  button: {
    width: 150,
    height: 65,
    backgroundColor: '#B8E0D2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 24,
  },
  text: {
    fontSize: 18,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  input: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 20,
  },
});

export default styles;
