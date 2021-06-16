import 'react-native';
import React from 'react';
import PlantCard from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a PlantCard component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;

  beforeEach(() => {
    myStore = mockStore({
      name: 'kentia',
      _id: '1a',
      image: 'img.com',
      room: 'bedroom',
    });
    navigation = {
      navigate: jest.fn(),
    };
  });

  describe('When invoques PlantCard function', () => {
    test('Then PlantCard component renders correctly', () => {
      const wrapper = render(
        <Provider store={myStore}>
          <PlantCard plant={myStore} />
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When a plant card is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <PlantCard plant={myStore} navigation={navigation} />
        </Provider>,
      );
      const gotToDetails = getByTestId('goToDetails');
      fireEvent.press(gotToDetails);

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
