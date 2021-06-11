import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './CardPlant.styles';

const CardPlant = ({plant}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => navigation.navigate('PlantDetails', {plantId: plant._id})}>
      <Image style={styles.image} source={{uri: plant.image}} />

      <View style={styles.textContainer} />
      <Text style={styles.text}>{plant.name}</Text>
    </Pressable>
  );
};

export default CardPlant;
