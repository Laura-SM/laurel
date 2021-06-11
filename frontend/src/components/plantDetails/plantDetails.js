/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {loadPlant} from '../../redux/actions/plantsActionCreators';
import styles from './PlantDetails.styles';
import globalStyles from '../../styles/global.styles';

function PlantDetails({selectedPlant, dispatch, route, navigation: {goBack}}) {
  const {plantId} = route.params;

  useEffect(() => {
    dispatch(loadPlant(plantId));
  }, [route.params]);

  return (
    <View style={globalStyles.mainContainer}>
      <View>
        <Text style={globalStyles.titleText}>{selectedPlant.name}</Text>
      </View>
      <Text style={globalStyles.subTitleText}>
        {selectedPlant.scientificName}
      </Text>
      <View style={styles.featuresContainer}>
        <Image style={styles.image} source={{uri: selectedPlant.image}} />
        <View>
          <Image source={require('../../icons/water24.png')} />
          <Text>{selectedPlant.waterNeeds}</Text>
          <Image source={require('../../icons/mist24.png')} />
          <Text>{selectedPlant.mistNeeds}</Text>
          <Image source={require('../../icons/sun24.png')} />
          <Text>{selectedPlant.lightNeeds}</Text>
          <Image source={require('../../icons/pets24.png')} />
          <Text>{selectedPlant.petFriendly}</Text>
        </View>
      </View>
      <Text style={globalStyles.text}>{selectedPlant.info}</Text>
      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.roundButton}
          onPress={() => goBack()}>
          <Image source={require('../../icons/goBack24.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function mapStateToProps({selectedPlant}) {
  return {
    selectedPlant,
  };
}

export default connect(mapStateToProps)(PlantDetails);
