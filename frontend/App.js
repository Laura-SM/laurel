import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/index';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from './src/components/SignIn/SignIn';
import SignUp from './src/components/SignUp/SignUp';
import PlantDetails from './src/components/PlantDetails/PlantDetails';
import CardPlant from './src/components/CardPlant/CardPlant';
import MyPlantDetails from './src/components/MyPlantDetails/MyPlantDetails';
import CardMyPlant from './src/components/CardMyPlant/CardMyPlant';
import MyReminders from './src/components/MyReminders/MyReminders';
import PlantsSearcher from './src/components/PlantsSearcher/PlantsSearcher';
import MyPlants from './src/components/MyPlants/MyPlants';
import AddPlant from './src/components/AddPlant/AddPlant';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="SignIn"
          screenOptions={({route}) => ({
            tabBarButton: [
              'SignIn',
              'SignUp',
              'PlantDetails',
              'CardPlant',
              'MyPlantDetails',
              'CardMyPlant',
              'AddPlant',
            ].includes(route.name)
              ? () => {
                  return null;
                }
              : undefined,
          })}
          tabBarOptions={{
            showLabel: true,
          }}>
          <Tab.Screen
            name="SignIn"
            component={SignIn}
            options={{tabBarVisible: false}}
          />
          <Tab.Screen
            name="SignUp"
            component={SignUp}
            options={{tabBarVisible: false}}
          />
          <Tab.Screen name="MyReminders" component={MyReminders} />
          <Tab.Screen name="PlantsSearcher" component={PlantsSearcher} />
          <Tab.Screen name="MyPlants" component={MyPlants} />
          <Tab.Screen name="PlantDetails" component={PlantDetails} />
          <Tab.Screen name="CardPlant" component={CardPlant} />
          <Tab.Screen name="MyPlantDetails" component={MyPlantDetails} />
          <Tab.Screen name="CardMyPlant" component={CardMyPlant} />
          <Tab.Screen name="AddPlant" component={AddPlant} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
