/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import CardMyPlant from '../CardMyPlant/CardMyPlant';
import globalStyles from '../../styles/global.styles';

const MyPlants = ({plants, userAccess, dispatch}) => {
  useEffect(() => {
    if (userAccess.user.plants.length) {
      dispatch(loadPlants(userAccess.user.plants));
    }
  }, [userAccess.user.plants]);

  const myPlantsIds = [...userAccess.user.plants];

  console.log(myPlantsIds);

  const myPlantsList = [];
  if (myPlantsIds.length) {
    myPlantsIds.forEach(id => {
      let myPlant = plants.find(plant => plant._id === id);
      myPlantsList.push(myPlant);
    });
  }
  const renderCardPlant = ({item}) => <CardMyPlant plant={item} />;
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.titleText}>My plants</Text>
        <TouchableOpacity
          style={globalStyles.roundButton}
          onPress={() => navigation.navigate('AddPlant')}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        {myPlantsList[0] ? (
          <FlatList
            data={myPlantsList}
            renderItem={renderCardPlant}
            keyExtractor={plant => plant._id}
          />
        ) : (
          <Text>Add your plants!</Text>
        )}
      </View>
      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity style={globalStyles.roundButton}>
          <Text>Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

function mapStateToProps({userAccess, plants}) {
  return {
    userAccess,
    plants,
  };
}

export default connect(mapStateToProps)(MyPlants);
