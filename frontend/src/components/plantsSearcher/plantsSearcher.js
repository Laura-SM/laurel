/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import CardPlant from '../CardPlant/CardPlant';
import globalStyles from '../../styles/global.styles';

const PlantsSearcher = ({plants, dispatch}) => {
  useEffect(() => {
    if (!plants.length) {
      dispatch(loadPlants());
    }
  }, [plants]);

  const listRef = useRef(null);

  const goUp = () => {
    listRef.current.scrollToTop({offset: 0, animated: true});
  };

  const filterSearch = () => console.log('filter');

  const renderCardPlant = ({item}) => <CardPlant plant={item} />;

  return (
    <FlatList
      ref={listRef}
      style={globalStyles.mainContainer}
      ListHeaderComponent={
        <>
          <View style={globalStyles.headerContainer}>
            <Text style={globalStyles.titleText}>Find a plant</Text>
            <TouchableOpacity
              style={globalStyles.roundButton}
              onPress={filterSearch}>
              <Text>Fi</Text>
            </TouchableOpacity>
          </View>
        </>
      }
      data={plants}
      renderItem={renderCardPlant}
      keyExtractor={plant => plant._id}
      ListFooterComponent={
        <>
          <View style={globalStyles.bottomContainer}>
            <TouchableOpacity style={globalStyles.roundButton} onPress={goUp}>
              <Text>Up</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
};

function mapStateToProps(store) {
  return {
    plants: store.plants,
  };
}

export default connect(mapStateToProps)(PlantsSearcher);
