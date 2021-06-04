import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import {signInUser} from '../../redux/actions/authActionCreators';
import styles from './signIn.styles';

const SignIn = ({dispatch, userAccess, navigation}) => {
  useEffect(() => {
    userAccess && navigation.navigate('Search');
  }, [userAccess, navigation]);

  let [email, setEmailInputValue] = useState('');
  let [password, setPasswordInputValue] = useState('');

  const onPressSignIn = () => {
    dispatch(signInUser({email, password}));
  };

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/pbFgzLP/laurel-logo.png',
        }}
      />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmailInputValue(text)}
          value={email}
          placeholder="email"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPasswordInputValue(text)}
          value={password}
          placeholder="password"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onPressSignIn}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Don't have an account?{' '}
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.underlineText}>Create new</Text>
        </Pressable>
      </Text>
    </View>
  );
};

function mapStateToProps({userAccess}) {
  return {
    userAccess,
  };
}

export default connect(mapStateToProps)(SignIn);
