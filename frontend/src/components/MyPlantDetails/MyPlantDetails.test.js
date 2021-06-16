import 'react-native';
import React from 'react';
import MyPlantDetails from './index';
import * as userActions from '../../redux/actions/usersActionCreators';
import * as actions from '../../redux/actions/plantsActionCreators';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a MyPlantDetails component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;
  let route = {
    params: {plantId: '1a'},
  };

  beforeEach(() => {
    jest.spyOn(userActions, 'updateUser').mockReturnValueOnce({type: ''});
    myStore = mockStore({
      userAccess: {
        user: {email: 'laura@email.com', password: '123', plants: ['1a']},
      },
      selectedPlant: {
        name: 'kentia',
        _id: '1a',
        image: 'img.com',
        room: 'bedroom',
      },
    });
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
  });

  describe('When invoques MyPlantDetails function', () => {
    test('Should render a plant with detail', () => {
      const detail = render(
        <Provider store={myStore}>
          <MyPlantDetails route={route} />
        </Provider>,
      );
      expect(detail).toMatchSnapshot();
    });
  });

  describe('When goBack button is pressed', () => {
    test('Then navigation.goBack is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <MyPlantDetails route={route} navigation={navigation} />
        </Provider>,
      );
      const goBack = getByTestId('goBackButton');
      fireEvent.press(goBack);

      expect(navigation.goBack).toHaveBeenCalled();
    });
  });

  describe('When deletePlant button is pressed', () => {
    test('Then updateUser is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <MyPlantDetails route={route} navigation={navigation} />
        </Provider>,
      );
      const deletePlant = getByTestId('deletePlantButton');
      fireEvent.press(deletePlant);

      expect(userActions.updateUser).toHaveBeenCalled();
    });
  });
});
