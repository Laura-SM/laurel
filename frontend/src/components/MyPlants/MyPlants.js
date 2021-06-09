import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import CardMyPlant from '../CardMyPlant/CardMyPlant';
import globalStyles from '../../styles/global.styles';

const MyPlants = ({plants, userAccess}) => {
  const plantsList = plants;
  const myPlantsIds = userAccess.user.plants;
  let myPlantsList = [];
  if (myPlantsIds.length) {
    myPlantsIds.forEach(id => {
      let myPlant = plantsList.find(plant => plant._id === id);
      myPlantsList.push(myPlant);
    });
  }

  console.log('MyPlants');
  console.log(myPlantsList);
  console.log(plants);

  const renderCardPlant = ({item}) => <CardMyPlant plant={item} />;

  return (
    <View>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.titleText}>My plants</Text>
        <TouchableOpacity style={globalStyles.roundButton}>
          <Text>Fi</Text>
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
          <Text>No tenim plantes</Text>
        )}
      </View>
      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity style={globalStyles.roundButton}>
          <Text>Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function mapStateToProps({userAccess, plants}) {
  return {
    userAccess,
    plants,
  };
}

export default connect(mapStateToProps)(MyPlants);
