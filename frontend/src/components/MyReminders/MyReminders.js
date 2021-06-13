/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import globalStyles from '../../styles/global.styles';

const MyReminders = ({plants, userAccess, dispatch}) => {
  const currentDate = new Date();
  const currentDateNoTime = new Date(
    Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    ),
  );

  useEffect(() => {
    if (userAccess.user.plants.length) {
      dispatch(loadPlants());
    }
  }, [userAccess.user.plants]);

  const reminderPlants = plants.filter(plant => {
    return (
      userAccess.user.plants.includes(plant._id) &&
      (new Date(plant.nextWaterDate).getTime() <= currentDateNoTime.getTime() ||
        new Date(plant.nextMistDate).getTime() <= currentDateNoTime.getTime() ||
        new Date(plant.nextTransplantDate).getTime() <=
          currentDateNoTime.getTime())
    );
  });
  console.log(reminderPlants);

  return (
    <View>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.titleText}>My Reminders</Text>
      </View>
      <Text style={globalStyles.subTitleText}>Today</Text>
      <Text>{currentDate.toLocaleDateString()}</Text>
      <Text>Plantes</Text>
    </View>
  );
};

function mapStateToProps({plants, userAccess}) {
  return {
    plants,
    userAccess,
  };
}

export default connect(mapStateToProps)(MyReminders);
