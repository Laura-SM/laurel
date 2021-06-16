import React from 'react';
import MyPlants from './index';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import MyPlantCard from '../MyPlantCard';

describe('Given a MyPlants component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
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

  describe('When is invoked', () => {
    test('Then it is renders correctly', () => {
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
});
