import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import CardPlant from '../CardPlant/CardPlant';
import globalStyles from '../../styles/global.styles';

const PlantsSearcher = ({plants}) => {
  const plantsList = plants.filter(plant => plant.card === true);
  const renderCardPlant = ({item}) => <CardPlant plant={item} />;

  return (
    <FlatList
      style={globalStyles.mainContainer}
      ListHeaderComponent={
        <>
          <View style={globalStyles.headerContainer}>
            <Text style={globalStyles.titleText}>Find a plant</Text>
            <TouchableOpacity style={globalStyles.roundButton}>
              <Text>Fi</Text>
            </TouchableOpacity>
          </View>
        </>
      }
      data={plantsList}
      renderItem={renderCardPlant}
      keyExtractor={plant => plant._id}
      ListFooterComponent={
        <>
          <View style={globalStyles.bottomContainer}>
            <TouchableOpacity style={globalStyles.roundButton}>
              <Text>Up</Text>
            </TouchableOpacity>
          </View>
        </>
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
