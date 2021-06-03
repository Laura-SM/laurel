/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {loadPlants} from '../../redux/actions/plantsActionCreators';
import styles from './home.styes';

const CardPlant = ({plant}) => (
  <TouchableOpacity style={styles.image}>
    <Text>{plant.name}</Text>
    <Image style={styles.image} source={{uri: plant.image}} />
  </TouchableOpacity>
);

const Home = ({navigation, plants, dispatch}) => {
  useEffect(() => {
    if (!plants.length) {
      dispatch(loadPlants());
    }
  }, []);

  const renderCardPlant = ({item}) => {
    return (
      <CardPlant
        plant={item}
        // onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <View className="plants-menu">
        {plants.length ? (
          <Text>Tenim plantes</Text>
        ) : (
          <Text> No tenim plantes</Text>
        )}

        <FlatList
          style={styles.list}
          data={plants}
          renderItem={renderCardPlant}
          keyExtractor={plant => plant.id}
        />

        {/* {plants.map(plant => (
          <>
            <Text>{plant.name}</Text>
            <Image style={styles.image} source={{uri: plant.image}} />
          </>
        ))} */}
      </View>
      <TouchableOpacity
        style={styles.button}
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

Home.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    plants: store.plants,
  };
}

export default connect(mapStateToProps)(Home);
