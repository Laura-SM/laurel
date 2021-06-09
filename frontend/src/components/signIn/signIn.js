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
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import styles from './SignIn.styles';

const SignIn = ({dispatch, userAccess, navigation}) => {
  useEffect(() => {
    userAccess.token && navigation.navigate('MyReminders');
  }, [userAccess, navigation]);

  let [email, setEmailInputValue] = useState('');
  let [password, setPasswordInputValue] = useState('');

  const onPressSignIn = () => {
    dispatch(signInUser({email, password}));
  };

  if (userAccess.token) {
    dispatch(loadPlants());
  }

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/pbFgzLP/laurel-logo.png',
        }}
      />

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

      <TouchableOpacity style={styles.button} onPress={onPressSignIn}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>

      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text}>
          Don't have an account?{' '}
          <Text style={styles.underlineText}>Create new</Text>
        </Text>
      </Pressable>
    </View>
  );
};

function mapStateToProps({userAccess}) {
  return {
    userAccess,
  };
}

export default connect(mapStateToProps)(SignIn);
