import React from 'react';
import AddPlant from './index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as plantsActions from '../../redux/actions/plantsActionCreators';
import * as usersActions from '../../redux/actions/usersActionCreators';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a AddPlant component', () => {
  const mockStore = configureStore([thunk]);
  let store = mockStore({
    selectedPlant: {name: 'kentia', _id: '2b', card: false},
    userAccess: {
      user: {
        plants: ['1a'],
      },
    },
  });
  const navigation = {
    navigate: jest.fn(),
  };

  describe('When is AddPlant function is invoked', () => {
    test('Then AddPlant is rendered correctly', () => {
      const wrapper = render(
        <Provider store={store}>
          <AddPlant />
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When done button is pressed', () => {
    test('Then dispatch addPlant', () => {
      jest.spyOn(plantsActions, 'addPlant').mockReturnValueOnce({type: ''});
      const {getByTestId} = render(
        <Provider store={store}>
          <AddPlant />
        </Provider>,
      );
      const addPlant = getByTestId('addPlantButton');
      fireEvent.press(addPlant);

      expect(plantsActions.addPlant).toHaveBeenCalled();
    });
  });

  describe('When goBack button is pressed with a new plant', () => {
    test('Then dispatch updateUser', () => {
      jest.spyOn(usersActions, 'updateUser').mockReturnValueOnce({type: ''});
      const {getByTestId} = render(
        <Provider store={store}>
          <AddPlant navigation={navigation} />
        </Provider>,
      );
      const goBack = getByTestId('goBackButton');
      fireEvent.press(goBack);

      expect(usersActions.updateUser).toHaveBeenCalled();
    });
  });

  describe('When goBack button is pressed with a repeat plant', () => {
    test('Then dispatch updateUser', () => {
      jest.spyOn(usersActions, 'updateUser').mockReturnValueOnce({type: ''});
      store = mockStore({
        selectedPlant: {name: 'kentia', _id: '1a', card: false},
        userAccess: {
          user: {
            plants: ['1a'],
          },
        },
      });
      const {getByTestId} = render(
        <Provider store={store}>
          <AddPlant navigation={navigation} />
        </Provider>,
      );
      const goBack = getByTestId('goBackButton');
      fireEvent.press(goBack);

      expect(usersActions.updateUser).toHaveBeenCalled();
    });
  });

  describe('When goBack button is pressed with a card plant', () => {
    test('Then navigation.navigate is invoked', () => {
      store = mockStore({
        selectedPlant: {name: 'kentia', _id: '1a', card: true},
        userAccess: {
          user: {
            plants: ['2a'],
          },
        },
      });
      const {getByTestId} = render(
        <Provider store={store}>
          <AddPlant navigation={navigation} />
        </Provider>,
      );
      const goBack = getByTestId('goBackButton');
      fireEvent.press(goBack);

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
