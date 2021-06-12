/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import MyPlantCard from '../MyPlantCard/MyPlantCard';
import globalStyles from '../../styles/global.styles';

const MyPlants = ({plants, userAccess, dispatch}) => {
  const navigation = useNavigation();
  const myPlantsIds = [...userAccess.user.plants];
  const myPlantsList = [];
  if (myPlantsIds.length) {
    myPlantsIds.forEach(id => {
      let myPlant = plants.find(plant => plant._id === id);
      myPlantsList.push(myPlant);
    });
  }
  const renderMyPlantCard = ({item}) => <MyPlantCard plant={item} />;

  useEffect(() => {
    if (userAccess.user.plants.length) {
      dispatch(loadPlants(userAccess.user.plants));
    }
  }, [userAccess.user.plants]);

  return (
    <FlatList
      style={globalStyles.mainContainer}
      ListHeaderComponent={
        <View style={globalStyles.headerContainer}>
          <Text style={globalStyles.titleText}>My plants</Text>
          <TouchableOpacity
            style={globalStyles.roundButton}
            onPress={() => navigation.navigate('AddPlant')}>
            <Image source={require('../../icons/add24.png')} />
          </TouchableOpacity>
        </View>
      }
      data={myPlantsList}
      renderItem={renderMyPlantCard}
      keyExtractor={plant => plant._id}
      horizontal={false}
      numColumns={2}
    />
  );
};

function mapStateToProps({userAccess, plants}) {
  return {
    userAccess,
    plants,
  };
}

export default connect(mapStateToProps)(MyPlants);
