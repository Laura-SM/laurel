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
import {signUpUser} from '../../redux/actions/authActionCreators';
import globalStyles from '../../styles/global.styles';
import authStyles from '../../styles/auth.styles';

const SignUp = ({dispatch, user, navigation}) => {
  let [email, setEmailInputValue] = useState('');
  let [password, setPasswordInputValue] = useState('');
  const onPressSignUp = () => {
    dispatch(signUpUser({email, password}));
  };

  useEffect(() => {
    user && navigation.navigate('SignIn');
  }, [user, navigation]);

  return (
    <View style={authStyles.mainContainer}>
      <Image
        style={authStyles.logo}
        source={{
          uri: 'https://i.ibb.co/pbFgzLP/laurel-logo.png',
        }}
      />
      <TextInput
        style={authStyles.input}
        onChangeText={text => setEmailInputValue(text)}
        value={email}
        placeholder="email"
        keyboardType="default"
      />
      <TextInput
        style={authStyles.input}
        onChangeText={text => setPasswordInputValue(text)}
        value={password}
        placeholder="password"
        keyboardType="default"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={globalStyles.submitButton}
        onPress={onPressSignUp}>
        <Text style={authStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={authStyles.bottomContainer}>
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text style={globalStyles.text}>
            Already a member?{' '}
            <Text style={authStyles.underlineText}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

function mapStateToProps({user}) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(SignUp);
