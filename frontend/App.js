import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/index';
import SignIn from './src/components/SignIn/SignIn';
import SignUp from './src/components/SignUp/SignUp';
import BottomNavigator from './src/components/BottomNavigator/BottomNavigator';

import PlantDetails from './src/components/PlantDetails/PlantDetails';
import CardPlant from './src/components/CardPlant/CardPlant';
import MyPlantDetails from './src/components/MyPlantDetails/MyPlantDetails';
import CardMyPlant from './src/components/CardMyPlant/CardMyPlant';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="PlantDetails" component={PlantDetails} />
          <Stack.Screen name="CardPlant" component={CardPlant} />
          <Stack.Screen name="MyPlantDetails" component={MyPlantDetails} />
          <Stack.Screen name="CardMyPlant" component={CardMyPlant} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
