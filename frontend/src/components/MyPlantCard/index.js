import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';

const MyPlantCard = ({plant, navigation}) => {
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate('MyPlantDetails', {plantId: plant._id})
      }>
      <Image style={styles.image} source={{uri: plant.image}} />
      <Text style={globalStyles.boldText}>{plant.name}</Text>
      <Text style={globalStyles.text}>{plant.room}</Text>
    </Pressable>
  );
};

export default MyPlantCard;
