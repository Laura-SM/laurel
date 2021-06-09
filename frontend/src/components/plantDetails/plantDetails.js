/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {loadPlant} from '../../redux/actions/plantsActionCreators';
import styles from './PlantDetails.styles';
import globalStyles from '../../styles/global.styles';

function PlantDetails({selectedPlant, dispatch, route, navigation: {goBack}}) {
  const {plantId} = route.params;

  useEffect(() => {
    dispatch(loadPlant(plantId));
  }, [plantId]);

  return (
    <ScrollView style={globalStyles.mainContainer}>
      <Text style={globalStyles.titleText}>{selectedPlant.name}</Text>
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
        <Text>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function mapStateToProps({selectedPlant}) {
  return {
    selectedPlant,
  };
}

export default connect(mapStateToProps)(PlantDetails);
