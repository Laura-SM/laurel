import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './cardPlant.styles';

const CardPlant = ({plant}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.image}
      onPress={() => navigation.navigate('PlantDetails', {plantId: plant._id})}>
      <Text>{plant.name}</Text>
      <Image style={styles.image} source={{uri: plant.image}} />
    </Pressable>
  );
};

export default CardPlant;
