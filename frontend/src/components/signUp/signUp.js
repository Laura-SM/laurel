import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {signUpUser, signInUser} from '../../redux/actions/authActionCreators';
import styles from './signUp.styles';

const SignUp = ({dispatch, userAccess, navigation}) => {
  useEffect(() => {
    userAccess && navigation.navigate('Search');
  }, [userAccess, navigation]);

  let [email, setEmailInputValue] = useState('');
  let [password, setPasswordInputValue] = useState('');

  const onPressSignUp = () => {
    dispatch(signUpUser({email, password}));
    console.log('un');
    dispatch(signInUser({email, password}));
    console.log('dos');
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
      <TouchableOpacity style={styles.button} onPress={onPressSignUp}>
        <Text style={styles.textButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps({user, userAccess}) {
  return {
    user,
    userAccess,
  };
}

export default connect(mapStateToProps)(SignUp);
