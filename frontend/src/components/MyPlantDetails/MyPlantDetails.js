/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deletePlant, loadPlant} from '../../redux/actions/plantsActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import {useNavigation} from '@react-navigation/native';
import styles from './MyPlantDetails.style';
import globalStyles from '../../styles/global.styles';

const MyPlantDetails = ({
  userAccess,
  selectedPlant,
  dispatch,
  route,
  navigation: {goBack},
}) => {
  const {plantId} = route.params;
  const navigation = useNavigation();
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
          style={globalStyles.roundButton}
          onPress={() => onPressDeletePlant()}>
          <Image source={require('../../icons/delete24.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.centralContainer}>
        <Image style={styles.image} source={{uri: selectedPlant.image}} />
        <View style={styles.featuresContainer}>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/room24.png')} />
            <Text style={globalStyles.text}>{selectedPlant.room}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/water24.png')} />
            <Text style={globalStyles.text}>{selectedPlant.nextWaterDate}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/mist24.png')} />
            <Text style={globalStyles.text}>{selectedPlant.nextMistDate}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/settings24.png')} />
            <Text style={globalStyles.text}>
              {selectedPlant.nextTransplantDate}
            </Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.roundButton}
          onPress={() => goBack()}>
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
