import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/index';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from './src/components/SignIn/index';
import SignUp from './src/components/SignUp';
import PlantDetails from './src/components/PlantDetails';
import PlantCard from './src/components/PlantCard';
import MyPlantDetails from './src/components/MyPlantDetails';
import MyPlantCard from './src/components/MyPlantCard';
import MyReminders from './src/components/MyReminders';
import PlantsSearcher from './src/components/PlantsSearcher';
import MyPlants from './src/components/MyPlants';
import AddPlant from './src/components/AddPlant';
import ReminderCard from './src/components/ReminderCard';

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
              'PlantCard',
              'MyPlantDetails',
              'MyPlantCard',
              'AddPlant',
              'ReminderCard',
            ].includes(route.name)
              ? () => {
                  return null;
                }
              : undefined,
          })}
          tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: '#B8E0D2',
            },
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
          <Tab.Screen
            name="MyReminders"
            component={MyReminders}
            options={{
              tabBarIcon: () => (
                <Image source={require('./src/icons/calendar24.png')} />
              ),
            }}
          />
          <Tab.Screen
            name="MyPlants"
            component={MyPlants}
            options={{
              tabBarIcon: () => (
                <Image source={require('./src/icons/flower24.png')} />
              ),
            }}
          />
          <Tab.Screen
            name="PlantsSearcher"
            component={PlantsSearcher}
            options={{
              tabBarIcon: () => (
                <Image source={require('./src/icons/search24.png')} />
              ),
            }}
          />
          <Tab.Screen
            name="PlantDetails"
            component={PlantDetails}
            options={{tabBarVisible: false}}
          />
          <Tab.Screen name="PlantCard" component={PlantCard} />
          <Tab.Screen
            name="MyPlantDetails"
            component={MyPlantDetails}
            options={{tabBarVisible: false}}
          />
          <Tab.Screen name="MyPlantCard" component={MyPlantCard} />
          <Tab.Screen
            name="AddPlant"
            component={AddPlant}
            options={{tabBarVisible: false}}
          />
          <Tab.Screen
            name="ReminderCard"
            component={ReminderCard}
            options={{tabBarVisible: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
