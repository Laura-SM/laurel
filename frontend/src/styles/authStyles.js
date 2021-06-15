import {StyleSheet} from 'react-native';

const authStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D6EADF',
    alignItems: 'center',
  },
  logo: {
    width: 320,
    height: 290,
    marginTop: 60,
  },
  input: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 20,
    margin: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 20,
  },
  underlineText: {
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});

export default authStyles;
