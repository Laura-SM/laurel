import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/index';
import SignIn from './src/components/SignIn/SignIn';
import SignUp from './src/components/SignUp/SignUp';
import PlantsSearcher from './src/components/PlantsSearcher/PlantsSearcher';
import PlantDetails from './src/components/PlantDetails/PlantDetails';
import CardPlant from './src/components/CardPlant/CardPlant';

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
          <Tab.Screen name="PlantDetails" component={PlantDetails} />
          <Tab.Screen name="CardPlant" component={CardPlant} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
