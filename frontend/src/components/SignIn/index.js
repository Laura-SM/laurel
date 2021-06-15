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
import globalStyles from '../../styles/globalStyles';
import authStyles from '../../styles/authStyles';

const SignIn = ({dispatch, userAccess, navigation}) => {
  let [email, setEmailInputValue] = useState('');
  let [password, setPasswordInputValue] = useState('');

  const onPressSignIn = () => {
    dispatch(signInUser({email, password}));
  };

  useEffect(() => {
    userAccess.token && navigation.navigate('MyReminders');
  }, [userAccess, navigation]);

  return (
    <View style={authStyles.mainContainer}>
      <Image
        style={authStyles.logo}
        source={{
          uri: 'https://i.ibb.co/pbFgzLP/laurel-logo.png',
        }}
      />
      <TextInput
        testID="emailInput"
        style={authStyles.input}
        onChangeText={text => setEmailInputValue(text)}
        value={email}
        placeholder="email"
        keyboardType="default"
        textContentType="emailAddress"
      />
      <TextInput
        testID="passwordInput"
        style={authStyles.input}
        onChangeText={text => setPasswordInputValue(text)}
        value={password}
        placeholder="password"
        keyboardType="default"
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        testID="signIn"
        style={globalStyles.submitButton}
        onPress={onPressSignIn}>
        <Text style={authStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={authStyles.bottomContainer}>
        <Pressable
          testID="goSignUp"
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={globalStyles.text}>
            Don't have an account?{' '}
            <Text style={authStyles.underlineText}>Create new</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

function mapStateToProps({userAccess}) {
  return {
    userAccess,
  };
}

export default connect(mapStateToProps)(SignIn);
