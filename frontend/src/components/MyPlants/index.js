import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import MyPlantCard from '../MyPlantCard';
import globalStyles from '../../styles/globalStyles';

const MyPlants = ({plants, userAccess, navigation}) => {
  const myPlantsIds = [...userAccess.user.plants];
  const myPlantsList = [];
  if (myPlantsIds.length) {
    myPlantsIds.forEach(id => {
      let myPlant = plants.find(plant => plant._id === id);
      myPlantsList.push(myPlant);
    });
  }
  const renderMyPlantCard = ({item}) => <MyPlantCard plant={item} />;

  return (
    <FlatList
      style={globalStyles.mainContainer}
      ListEmptyComponent={
        <Text style={globalStyles.text}>Add your plants!</Text>
      }
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
