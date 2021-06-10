import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './CardMyPlant.styles';

const CardMyPlant = ({plant}) => {
  const navigation = useNavigation();
  return (
    <>
      <Text>{plant.name}</Text>
      <Pressable
        onPress={() =>
          navigation.navigate('MyPlantDetails', {plantId: plant._id})
        }>
        <Image style={styles.image} source={{uri: plant.image}} />
      </Pressable>
    </>
  );
};

export default CardMyPlant;
