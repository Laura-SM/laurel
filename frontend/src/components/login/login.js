import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Login = () => {
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
      height: 60,
      backgroundColor: '#B8E0D2',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    textButton: {
      fontSize: 24,
    },
    underlineText: {
      textDecorationLine: 'underline',
    },
  });

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/pbFgzLP/laurel-logo.png',
        }}
      />
      <TouchableOpacity
        style={styles.button}
        // onPress={onPress}
      >
        <Text style={styles.textButton}>Log In</Text>
      </TouchableOpacity>
      <Text>
        Don't have an account?{' '}
        <Text style={styles.underlineText}>Create new</Text>
      </Text>
    </View>
  );
};

export default Login;
