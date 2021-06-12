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
import globalStyles from '../../styles/global.styles';
import authStyles from '../../styles/auth.styles';

const SignIn = ({dispatch, userAccess, navigation}) => {
  let [email, setEmailInputValue] = useState('');
  let [password, setPasswordInputValue] = useState('');
  const onPressSignIn = () => {
    dispatch(signInUser({email, password}));
  };
  if (userAccess.token) {
    dispatch(loadPlants());
  }

  useEffect(() => {
    userAccess.user && navigation.navigate('MyReminders');
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
        style={authStyles.input}
        onChangeText={text => setEmailInputValue(text)}
        value={email}
        placeholder="email"
        keyboardType="default"
        textContentType="emailAddress"
      />
      <TextInput
        style={authStyles.input}
        onChangeText={text => setPasswordInputValue(text)}
        value={password}
        placeholder="password"
        keyboardType="default"
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={globalStyles.submitButton}
        onPress={onPressSignIn}>
        <Text style={authStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={authStyles.bottomContainer}>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
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
