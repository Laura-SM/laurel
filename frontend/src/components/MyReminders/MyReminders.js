/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import ReminderCard from '../ReminderCard/ReminderCard';
import globalStyles from '../../styles/global.styles';

const MyReminders = ({plants, userAccess, dispatch}) => {
  // useEffect(() => {
  //   dispatch(loadPlants());
  // }, [plants.length]);

  if (userAccess.token) {
    if (!plants.length) {
      dispatch(loadPlants());
    }
  }

  const currentDate = new Date();
  const currentDateNoTime = new Date(
    Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    ),
  );

  let plantsWithReminder = plants.filter(plant => {
    return (
      userAccess.user.plants.includes(plant._id) &&
      (new Date(plant.nextWaterDate).getTime() <= currentDateNoTime.getTime() ||
        new Date(plant.nextMistDate).getTime() <= currentDateNoTime.getTime() ||
        new Date(plant.nextTransplantDate).getTime() <=
          currentDateNoTime.getTime())
    );
  });

  const renderReminderCard = ({item}) => <ReminderCard plant={item} />;

  return (
    <FlatList
      style={globalStyles.mainContainer}
      ListEmptyComponent={
        <Text style={globalStyles.text}>You don't have any reminder!</Text>
      }
      ListHeaderComponent={
        <View style={globalStyles.headerContainer}>
          <Text style={globalStyles.titleText}>My reminders</Text>
        </View>
      }
      data={plantsWithReminder}
      renderItem={renderReminderCard}
      keyExtractor={plant => plant._id}
    />
  );
};

function mapStateToProps({plants, userAccess}) {
  return {
    plants,
    userAccess,
  };
}

export default connect(mapStateToProps)(MyReminders);
