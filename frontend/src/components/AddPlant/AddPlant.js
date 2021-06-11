import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {addPlant} from '../../redux/actions/plantsActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../styles/global.styles';
import styles from './AddPlant.styles';

const AddPlant = ({dispatch, userAccess, selectedPlant}) => {
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
    <View>
      <Text>Add plant</Text>
      <TouchableOpacity
        style={globalStyles.roundButton}
        onPress={onPressAddPlant}>
        <Image source={require('../../icons/done24.png')} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={text => setPlantNameInputValue(text)}
        value={name}
        placeholder="Plant name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setRoomInputValue(text)}
        value={room}
        placeholder="Room"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNextWaterDateInputValue(text)}
        value={nextWaterDate}
        placeholder="Last watering date"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNextMistDateInputValue(text)}
        value={nextMistDate}
        placeholder="Last misting date"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNextTransplantDateInputValue(text)}
        value={nextTransplantDate}
        placeholder="Last transplant date"
        keyboardType="default"
      />
      <TouchableOpacity
        style={globalStyles.roundButton}
        onPress={() => updateUserPlantsAndGoBack()}>
        <Image source={require('../../icons/goBack24.png')} />
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps({userAccess, selectedPlant}) {
  return {
    userAccess,
    selectedPlant,
  };
}

export default connect(mapStateToProps)(AddPlant);
