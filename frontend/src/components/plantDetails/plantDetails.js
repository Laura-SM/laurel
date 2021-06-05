/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {loadPlant} from '../../redux/actions/plantsActionCreators';
import styles from './plantDetails.styles';

function PlantDetails({selectedPlant, dispatch, route}) {
  const {plantId} = route.params;
  useEffect(() => {
    dispatch(loadPlant(plantId));
  }, [plantId]);

  return (
    <View>
      <Text>{selectedPlant.name} details</Text>
      <Text>{selectedPlant.scientificName}</Text>
      <View>
        <Image style={styles.image} source={{uri: selectedPlant.image}} />
        <FlatList>
          <Text>{selectedPlant.waterNeeds}</Text>
          <Text>{selectedPlant.mistNeeds}</Text>
          <Text>{selectedPlant.lightNeeds}</Text>
          <Text>{selectedPlant.petFriendly}</Text>
        </FlatList>
      </View>
      <Text>{selectedPlant.info}</Text>
      <TouchableOpacity>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function mapStateToProps({selectedPlant}) {
  return {
    selectedPlant,
  };
}

export default connect(mapStateToProps)(PlantDetails);
