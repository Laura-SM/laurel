/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import CardPlant from '../cardPlant/cardPlant';
import styles from './plantsSearcher.styes';
import globalStyles from '../../styles/global.styles';

const PlantsSearcher = ({plants, dispatch}) => {
  useEffect(() => {
    if (!plants.length) {
      dispatch(loadPlants());
    }
  }, [plants]);

  const goUp = () => console.log('goUp');

  const filterSearch = () => console.log('filter');

  const renderCardPlant = ({item}) => <CardPlant plant={item} />;

  return (
    <ScrollView style={globalStyles.mainContainer}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.titleText}>Find a plant</Text>
        <TouchableOpacity
          style={globalStyles.roundButton}
          onPress={filterSearch}>
          <Text>Fi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.plantsContainer} className="plants-menu">
        <FlatList
          // showsVerticalScrollIndicator={false}
          // horizontal={false}
          // numColumns={2}
          data={plants}
          renderItem={renderCardPlant}
          keyExtractor={plant => plant._id}
        />
      </View>
      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity style={globalStyles.roundButton} onPress={goUp}>
          <Text>Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

function mapStateToProps(store) {
  return {
    plants: store.plants,
  };
}

export default connect(mapStateToProps)(PlantsSearcher);
