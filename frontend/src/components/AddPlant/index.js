import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import {addPlant} from '../../redux/actions/plantsActionCreators';
import {updateUser} from '../../redux/actions/usersActionCreators';
import DateTimePicker from '@react-native-community/datetimepicker';
import globalStyles from '../../styles/globalStyles';
import styles from './styles';

const AddPlant = ({dispatch, userAccess, selectedPlant, navigation}) => {
  const [name, setPlantNameInputValue] = useState('');
  const [room, setRoomInputValue] = useState('');

  const [nextWaterDate, setNextWaterDateInputValue] = useState(new Date());
  const [showWaterDatePicker, setShowWaterDatePicker] = useState(false);

  const [nextMistDate, setNextMistDateInputValue] = useState(new Date());
  const [showMistDatePicker, setShowMistDatePicker] = useState(false);

  const [nextTransplantDate, setNextTransplantDateInputValue] = useState(
    new Date(),
  );
  const [showTransplantDatePicker, setShowTransplantDatePicker] =
    useState(false);

  const onPressAddPlant = () => {
    let newPlant = {
      name,
      room,
      nextWaterDate: new Date(
        Date.UTC(
          nextWaterDate.getFullYear(),
          nextWaterDate.getMonth(),
          nextWaterDate.getDate(),
        ),
      ),
      nextMistDate: new Date(
        Date.UTC(
          nextMistDate.getFullYear(),
          nextMistDate.getMonth(),
          nextMistDate.getDate(),
        ),
      ),
      nextTransplantDate: new Date(
        Date.UTC(
          nextTransplantDate.getFullYear(),
          nextTransplantDate.getMonth(),
          nextTransplantDate.getDate(),
        ),
      ),
      card: false,
    };

    dispatch(addPlant(newPlant));
  };
  const userPlantsIds = userAccess.user.plants;
  const updateUserPlantsAndGoBack = () => {
    if (selectedPlant.card) {
      navigation.navigate('MyPlants', {myPlantsIds: userPlantsIds});
    } else {
      if (userPlantsIds.includes(selectedPlant._id)) {
        navigation.navigate('MyPlants', {myPlantsIds: userPlantsIds});
      } else {
        userPlantsIds.push(selectedPlant._id);
        dispatch(updateUser(userAccess.user));
        navigation.navigate('MyPlants', {myPlantsIds: userPlantsIds});
      }
    }
  };

  return (
    <ScrollView style={globalStyles.mainContainer}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.titleText}>Add plant</Text>
      </View>
      <View style={styles.centralContainer}>
        <Text style={styles.imageText}>Add a photo of your plant</Text>
        <Image
          style={styles.image}
          source={require('../../icons/flower48.png')}
        />
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
            <Pressable onPress={() => setShowWaterDatePicker(true)}>
              <TextInput
                style={styles.input}
                value={nextWaterDate.toLocaleDateString()}
                editable={false}
              />
            </Pressable>
            <>
              {showWaterDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={nextWaterDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={(e, selectedDate) => {
                    setShowWaterDatePicker(false);
                    const currentDate = selectedDate || nextWaterDate;
                    setNextWaterDateInputValue(currentDate);
                  }}
                />
              )}
            </>
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/mist24.png')} />
            <Pressable onPress={() => setShowMistDatePicker(true)}>
              <TextInput
                style={styles.input}
                value={nextMistDate.toLocaleDateString()}
                editable={false}
              />
            </Pressable>
            <>
              {showMistDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={nextMistDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={(e, selectedDate) => {
                    setShowMistDatePicker(false);
                    const currentDate = selectedDate || nextMistDate;
                    setNextMistDateInputValue(currentDate);
                  }}
                />
              )}
            </>
          </View>
          <View style={styles.iconsContainer}>
            <Image source={require('../../icons/settings24.png')} />
            <Pressable onPress={() => setShowTransplantDatePicker(true)}>
              <TextInput
                style={styles.input}
                value={nextTransplantDate.toLocaleDateString()}
                editable={false}
              />
            </Pressable>
            <>
              {showTransplantDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={nextTransplantDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={(e, selectedDate) => {
                    setShowTransplantDatePicker(false);
                    const currentDate = selectedDate || nextTransplantDate;
                    setNextTransplantDateInputValue(currentDate);
                  }}
                />
              )}
            </>
          </View>
        </View>
        <TouchableOpacity
          testID="addPlantButton"
          style={globalStyles.submitButton}
          onPress={onPressAddPlant}>
          <Image source={require('../../icons/done24.png')} />
        </TouchableOpacity>
      </View>
      <View style={globalStyles.bottomContainer}>
        <TouchableOpacity
          testID="goBackButton"
          style={globalStyles.roundButton}
          onPress={() => updateUserPlantsAndGoBack()}>
          <Image source={require('../../icons/goBack24.png')} />
        </TouchableOpacity>
      </View>
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
