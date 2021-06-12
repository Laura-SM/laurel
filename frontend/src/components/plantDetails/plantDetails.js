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
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.titleText}>{selectedPlant.name}</Text>
      </View>
      <Text style={globalStyles.subTitleText}>
        {selectedPlant.scientificName}
      </Text>
      <View style={styles.centralContainer}>
        <Image style={styles.image} source={{uri: selectedPlant.image}} />
        <View style={styles.featuresContainer}>
          <View style={styles.iconsContainer}>
            {selectedPlant.waterNeeds === 1 && (
              <Image source={require('../../icons/water24.png')} />
            )}
            {selectedPlant.waterNeeds === 2 && (
              <>
                <Image source={require('../../icons/water24.png')} />
                <Image source={require('../../icons/water24.png')} />
              </>
            )}
            {selectedPlant.waterNeeds === 3 && (
              <>
                <Image source={require('../../icons/water24.png')} />
                <Image source={require('../../icons/water24.png')} />
                <Image source={require('../../icons/water24.png')} />
              </>
            )}
          </View>
          <View style={styles.iconsContainer}>
            {selectedPlant.mistNeeds === 1 && (
              <Image source={require('../../icons/mist24.png')} />
            )}
            {selectedPlant.mistNeeds === 2 && (
              <>
                <Image source={require('../../icons/mist24.png')} />
                <Image source={require('../../icons/mist24.png')} />
              </>
            )}
            {selectedPlant.mistNeeds === 3 && (
              <>
                <Image source={require('../../icons/mist24.png')} />
                <Image source={require('../../icons/mist24.png')} />
                <Image source={require('../../icons/mist24.png')} />
              </>
            )}
          </View>
          <View style={styles.iconsContainer}>
            {selectedPlant.lightNeeds === 1 && (
              <Image source={require('../../icons/sun24.png')} />
            )}
            {selectedPlant.lightNeeds === 2 && (
              <>
                <Image source={require('../../icons/sun24.png')} />
                <Image source={require('../../icons/sun24.png')} />
              </>
            )}
            {selectedPlant.lightNeeds === 3 && (
              <>
                <Image source={require('../../icons/sun24.png')} />
                <Image source={require('../../icons/sun24.png')} />
                <Image source={require('../../icons/sun24.png')} />
              </>
            )}
          </View>
          <View style={styles.iconsContainer}>
            {selectedPlant.petFriendly ? (
              <Image source={require('../../icons/pets24.png')} />
            ) : (
              <Image source={require('../../icons/dangerous24.png')} />
            )}
          </View>
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
