import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyReminders from '../MyReminders/MyReminders';
import PlantsSearcher from '../PlantsSearcher/PlantsSearcher';
import MyPlants from '../MyPlants/MyPlants';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator initialRouteName="MyReminders">
      <Tab.Screen name="MyReminders" component={MyReminders} />
      <Tab.Screen name="PlantsSearcher" component={PlantsSearcher} />
      <Tab.Screen name="MyPlants" component={MyPlants} />
    </Tab.Navigator>
  );
}
