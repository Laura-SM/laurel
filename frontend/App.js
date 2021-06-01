import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './src/components/login/login';

const App = () => {
  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: '#D6EADF',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
  });

  return (
    <View style={styles.mainView}>
      <Login />
    </View>
  );
};

export default App;
