import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {loadUser} from '../../redux/actions/usersActionCreators';
import styles from './signUp.styles';

const SignUp = ({dispatch}) => {
  let [email, setEmailInputValue] = React.useState('');
  let [password, setPasswordInputValue] = React.useState('');

  const onPressSignIn = () => {
    dispatch(loadUser({email, password}));
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
        <Text style={styles.textButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps({userToken}) {
  return {
    userToken,
  };
}

export default connect(mapStateToProps)(SignUp);
