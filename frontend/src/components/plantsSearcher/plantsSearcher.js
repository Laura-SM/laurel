/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import CardPlant from '../cardPlant/cardPlant';
import styles from './plantsSearcher.styes';

const PlantsSearcher = ({plants, dispatch}) => {
  useEffect(() => {
    if (!plants.length) {
      dispatch(loadPlants());
    }
  }, [plants]);

  const renderCardPlant = ({item}) => {
    return <CardPlant plant={item} />;
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search plants</Text>
      <View className="plants-menu">
        {/* {plants.length ? (
          <Text>Tenim plantes</Text>
        ) : (
          <Text> No tenim plantes</Text>
        )} */}
        <FlatList
          style={styles.list}
          data={plants}
          renderItem={renderCardPlant}
          keyExtractor={plant => plant._id}
        />
      </View>
    </View>
  );
};

function mapStateToProps(store) {
  return {
    plants: store.plants,
  };
}

export default connect(mapStateToProps)(PlantsSearcher);
