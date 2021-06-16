import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const PlantCard = ({plant, navigation}) => {
  return (
    <Pressable
      testID="goToDetails"
      style={styles.cardContainer}
      onPress={() => navigation.navigate('PlantDetails', {plantId: plant._id})}>
      <Image style={styles.image} source={{uri: plant.image}} />

      <View style={styles.textContainer} />
      <Text style={styles.text}>{plant.name}</Text>
    </Pressable>
  );
};

export default PlantCard;
