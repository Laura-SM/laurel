import React from 'react';
import {View, Text, Image} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import styles from './styles';

const ReminderCard = ({plant}) => {
  const currentDate = new Date();
  const currentDateNoTime = new Date(
    Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    ),
  );

  const waterDate = new Date(plant.nextWaterDate).toLocaleDateString();
  const mistDate = new Date(plant.nextMistDate).toLocaleDateString();
  const transplantDate = new Date(
    plant.nextTransplantDate,
  ).toLocaleDateString();

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={{uri: plant.image}} />
      <View style={styles.featuresContainer}>
        <View style={styles.namesContainer}>
          <Text style={styles.boldText}>{plant.name}</Text>
          <Text style={styles.text}>{plant.room}</Text>
        </View>
        <View style={styles.iconsContainer}>
          {waterDate <= currentDateNoTime.toLocaleDateString() && (
            <Image
              style={styles.iconContainer}
              source={require('../../icons/water24.png')}
            />
          )}
          {mistDate <= currentDateNoTime.toLocaleDateString() && (
            <Image
              style={styles.iconContainer}
              source={require('../../icons/mist24.png')}
            />
          )}
          {transplantDate <= currentDateNoTime.toLocaleDateString() && (
            <Image
              style={styles.iconContainer}
              source={require('../../icons/settings24.png')}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default ReminderCard;
