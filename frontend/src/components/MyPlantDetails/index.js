/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deletePlant, loadPlant} from '../../redux/actions/plantsActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';

const MyPlantDetails = ({
  userAccess,
  selectedPlant,
  dispatch,
  route,
  navigation,
}) => {
  const {plantId} = route.params;

  const waterDate = new Date(selectedPlant.nextWaterDate).toLocaleDateString();
  const mistDate = new Date(selectedPlant.nextMistDate).toLocaleDateString();
  const transplantDate = new Date(
    selectedPlant.nextTransplantDate,
  ).toLocaleDateString();

  let myPlantsIds = userAccess.user.plants;

  const onPressDeletePlant = () => {
    userAccess.user.plants = myPlantsIds.filter(id => id !== plantId);
    dispatch(updateUser(userAccess.user));
    dispatch(deletePlant(plantId));
    navigation.navigate('MyPlants', {myPlantsIds: myPlantsIds});
  };

  useEffect(() => {
    dispatch(loadPlant(plantId));
  }, [route.params]);

  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.titleText}>{selectedPlant.name}</Text>
        <TouchableOpacity
          testID="deletePlantButton"
          style={globalStyles.roundButton}
          onPress={() => onPressDeletePlant()}>
          <Image source={require('../../icons/delete24.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.centralContainer}>
        <Image style={styles.image} source={{uri: selectedPlant.image}} />
        <View style={styles.featuresContainer}>
          <View style={globalStyles.iconsContainer}>
            <Image source={require('../../icons/room24.png')} />
            <Text style={globalStyles.text}>{selectedPlant.room}</Text>
          </View>
          <View style={globalStyles.iconsContainer}>
            <Image source={require('../../icons/water24.png')} />
            <Text style={globalStyles.text}>{waterDate}</Text>
          </View>
          <View style={globalStyles.iconsContainer}>
            <Image source={require('../../icons/mist24.png')} />
            <Text style={globalStyles.text}>{mistDate}</Text>
          </View>
          <View style={globalStyles.iconsContainer}>
            <Image source={require('../../icons/settings24.png')} />
            <Text style={globalStyles.text}>{transplantDate}</Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity
          testID="goBackButton"
          style={globalStyles.roundButton}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../icons/goBack24.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

function mapStateToProps({selectedPlant, userAccess}) {
  return {
    selectedPlant,
    userAccess,
  };
}

export default connect(mapStateToProps)(MyPlantDetails);
