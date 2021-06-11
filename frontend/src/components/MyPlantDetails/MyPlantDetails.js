/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {deletePlant, loadPlant} from '../../redux/actions/plantsActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import {useNavigation} from '@react-navigation/native';
import styles from '../PlantDetails/PlantDetails.styles';
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
    <ScrollView style={globalStyles.mainContainer}>
      <Text style={globalStyles.titleText}>{selectedPlant.name}</Text>
      <TouchableOpacity style={globalStyles.roundButton}>
        <Image source={require('../../icons/edit24.png')} />
      </TouchableOpacity>
      <Text style={globalStyles.subTitleText}>
        {selectedPlant.scientificName}
      </Text>
      <View style={styles.featuresContainer}>
        <Image style={styles.image} source={{uri: selectedPlant.image}} />
        <View>
          <Text>{selectedPlant.waterNeeds}</Text>
          <Text>{selectedPlant.mistNeeds}</Text>
          <Text>{selectedPlant.lightNeeds}</Text>
          <Text>{selectedPlant.petFriendly}</Text>
        </View>
      </View>
      <Text style={globalStyles.text}>{selectedPlant.info}</Text>
      <TouchableOpacity
        style={globalStyles.roundButton}
        onPress={() => goBack()}>
        <Image source={require('../../icons/goBack24.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.roundButton}
        onPress={() => onPressDeletePlant()}>
        <Image source={require('../../icons/delete24.png')} />
      </TouchableOpacity>
    </ScrollView>
  );
};

function mapStateToProps({selectedPlant, userAccess}) {
  return {
    selectedPlant,
    userAccess,
  };
}

export default connect(mapStateToProps)(MyPlantDetails);
