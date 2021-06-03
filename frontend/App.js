import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/index';
import Login from './src/components/login/login';
import Home from './src/components/home/home';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Login">
          <Tab.Screen
            name="Login"
            component={Login}
            options={{title: 'Login', tabBarVisible: false}}
          />
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
