import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {addPlant} from '../../redux/actions/plantsActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../styles/global.styles';
import styles from './AddPlant.styles';

const AddPlant = ({
  dispatch,
  userAccess,
  selectedPlant,
  navigation: {goBack},
}) => {
  const navigation = useNavigation();
  let [name, setPlantNameInputValue] = useState('');
  let [room, setRoomInputValue] = useState('');
  let [nextWaterDate, setNextWaterDateInputValue] = useState('');
  let [nextMistDate, setNextMistDateInputValue] = useState('');
  let [nextTransplantDate, setNextTransplantDateInputValue] = useState('');
  let newPlant = {
    name,
    room,
    nextWaterDate,
    nextMistDate,
    nextTransplantDate,
    card: false,
  };

  const onPressAddPlant = () => {
    dispatch(addPlant(newPlant));
  };

  const userPlantsIds = userAccess.user.plants;
  const updateUserPlantsAndGoBack = () => {
    userPlantsIds.push(selectedPlant._id);
    dispatch(updateUser(userAccess.user));
    navigation.navigate('MyPlants', {myPlantsIds: userPlantsIds});
  };

  return (
    <ScrollView style={globalStyles.mainContainer}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.titleText}>Add plant</Text>
        <TouchableOpacity
          style={globalStyles.roundButton}
          onPress={onPressAddPlant}>
          <Image source={require('../../icons/done24.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.centralContainer}>
        <Text>Add a photo of your plant</Text>
        <Image style={styles.image} source={{uri: selectedPlant.image}} />
        <View style={styles.featuresContainer}>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/description24.png')} />
            <TextInput
              style={styles.input}
              onChangeText={text => setPlantNameInputValue(text)}
              value={name}
              placeholder="Plant name"
              keyboardType="default"
            />
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/room24.png')} />
            <TextInput
              style={styles.input}
              onChangeText={text => setRoomInputValue(text)}
              value={room}
              placeholder="Room"
              keyboardType="default"
            />
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/water24.png')} />
            <TextInput
              style={styles.input}
              onChangeText={text => setNextWaterDateInputValue(text)}
              value={nextWaterDate}
              placeholder="Last watering date"
              keyboardType="default"
            />
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/mist24.png')} />
            <TextInput
              style={styles.input}
              onChangeText={text => setNextMistDateInputValue(text)}
              value={nextMistDate}
              placeholder="Last misting date"
              keyboardType="default"
            />
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/settings24.png')} />
            <TextInput
              style={styles.input}
              onChangeText={text => setNextTransplantDateInputValue(text)}
              value={nextTransplantDate}
              placeholder="Last transplant date"
              keyboardType="default"
            />
          </View>
        </View>
      </View>
      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.roundButton}
          onPress={() => goBack()}>
          <Image source={require('../../icons/goBack24.png')} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={globalStyles.roundButton}
        onPress={() => updateUserPlantsAndGoBack()}>
        <Image source={require('../../icons/goBack24.png')} />
      </TouchableOpacity>
    </ScrollView>
  );
};

function mapStateToProps({userAccess, selectedPlant}) {
  return {
    userAccess,
    selectedPlant,
  };
}

export default connect(mapStateToProps)(AddPlant);
