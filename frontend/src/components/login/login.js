import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

const Login = () => {
  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#D6EADF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 300,
      height: 300,
    },
    button: {
      width: 200,
      height: 60,
      color: '#B8E0D2',
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
      <Button
        style={styles.button}
        // onPress={onPressLearnMore}
        title="Sign In"
        accessibilityLabel="Sign In button"
      />
      <Text>Don't have an account? Create new</Text>
    </View>
  );
};

export default Login;
