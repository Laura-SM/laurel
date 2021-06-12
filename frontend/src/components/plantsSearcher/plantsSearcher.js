import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import PlantCard from '../PlantCard/PlantCard';
import globalStyles from '../../styles/global.styles';

const PlantsSearcher = ({plants}) => {
  const plantsList = plants.filter(plant => plant.card === true);
  const renderPlantCard = ({item}) => <PlantCard plant={item} />;

  return (
    <FlatList
      style={globalStyles.mainContainer}
      ListHeaderComponent={
        <View style={globalStyles.headerContainer}>
          <Text style={globalStyles.titleText}>Find a plant</Text>
          <TouchableOpacity style={globalStyles.roundButton}>
            <Image source={require('../../icons/filter24.png')} />
          </TouchableOpacity>
        </View>
      }
      data={plantsList}
      renderItem={renderPlantCard}
      keyExtractor={plant => plant._id}
      ListFooterComponent={
        <View style={globalStyles.bottomContainer}>
          <TouchableOpacity style={globalStyles.roundButton}>
            <Image source={require('../../icons/goUp24.png')} />
          </TouchableOpacity>
        </View>
      }
    />
  );
};

function mapStateToProps({plants}) {
  return {
    plants,
  };
}

export default connect(mapStateToProps)(PlantsSearcher);
