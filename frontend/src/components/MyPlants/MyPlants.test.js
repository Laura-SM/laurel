import React from 'react';
import MyPlants from './index';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import MyPlantCard from '../MyPlantCard';

describe('Given a MyPlants component', () => {
  const mockStore = configureStore([thunk]);
  let store = mockStore({
    plants: [
      {name: 'kentia', _id: '1a'},
      {name: 'potus', _id: '2a'},
    ],
    userAccess: {
      user: {
        plants: ['1a'],
      },
    },
  });
  const navigation = {
    navigate: jest.fn(),
  };

  describe('When MyPlants function is invoked', () => {
    test('Then MyPlants is rendered correctly', () => {
      const wrapper = render(
        <Provider store={store}>
          <MyPlants>
            <MyPlantCard />
          </MyPlants>
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When MyPlants function is invoked with an empty user plants list', () => {
    test('Then is rendered whitout plants', () => {
      store = mockStore({
        plants: [
          {name: 'kentia', _id: '1a'},
          {name: 'potus', _id: '2a'},
        ],
        userAccess: {
          user: {
            plants: [],
          },
        },
      });
      const wrapper = render(
        <Provider store={store}>
          <MyPlants>
            <MyPlantCard />
          </MyPlants>
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When addPlant button is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <MyPlants navigation={navigation}>
            <MyPlantCard />
          </MyPlants>
        </Provider>,
      );
      const addPlant = getByTestId('goAddPlant');
      fireEvent.press(addPlant);

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
