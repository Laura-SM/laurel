import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './login.styles';

const Login = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/pbFgzLP/laurel-logo.png',
        }}
      />
      <TextInput style={styles.input} defaultValue="Your email" />
      <TextInput style={styles.input} defaultValue="Your password" />
      <TouchableOpacity
        style={styles.button}
        // onPress={onPress}
      >
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Don't have an account?{' '}
        <Text style={styles.underlineText}>Create new</Text>
      </Text>
      <TouchableOpacity
        style={styles.button}
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Login;
