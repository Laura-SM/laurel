import 'react-native';
import React from 'react';
import PlantDetails from './index';
import * as actions from '../../redux/actions/plantsActionCreators';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a PlantDetails component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;
  let route = {
    params: {plantId: '1a'},
  };

  beforeEach(() => {
    myStore = mockStore({
      selectedPlant: {
        name: 'kentia',
        _id: '1a',
        image: 'img.com',
        room: 'bedroom',
      },
    });
    navigation = {
      goBack: jest.fn(),
    };
  });

  describe('When invoques PlantDetails function', () => {
    test('Should render a plant with detail', () => {
      const detail = render(
        <Provider store={myStore}>
          <PlantDetails route={route} />
        </Provider>,
      );
      expect(detail).toMatchSnapshot();
    });
  });

  describe('When goBack button is pressed', () => {
    test('Then navigation.goBack is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <PlantDetails route={route} navigation={navigation} />
        </Provider>,
      );
      const goBack = getByTestId('goBackButton');
      fireEvent.press(goBack);

      expect(navigation.goBack).toHaveBeenCalled();
    });
  });
});
