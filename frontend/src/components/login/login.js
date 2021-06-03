import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {loadUser} from '../../redux/actions/usersActionCreators';
import styles from './login.styles';

const Login = ({dispatch, navigation}) => {
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
      <SafeAreaView>
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
      </SafeAreaView>

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

// Login.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

function mapStateToProps({selectedUser}) {
  return {
    selectedUser,
  };
}

export default connect(mapStateToProps)(Login);
