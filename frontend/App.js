import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/index';
import SignIn from './src/components/signIn/signIn';
import SignUp from './src/components/signUp/signUp';
import PlantsSearcher from './src/components/plantsSearcher/plantsSearcher';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="SignIn">
          <Tab.Screen
            name="SignIn"
            component={SignIn}
            options={{title: 'SignIn'}}
          />
          <Tab.Screen
            name="SignUp"
            component={SignUp}
            options={{title: 'SignUp'}}
          />
          <Tab.Screen name="Search" component={PlantsSearcher} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
