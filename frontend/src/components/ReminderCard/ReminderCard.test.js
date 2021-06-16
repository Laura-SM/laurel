import 'react-native';
import React from 'react';
import ReminderCard from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';

describe('Given a ReminderCard component,', () => {
  const mockStore = Store([thunk]);
  const myStore = mockStore({
    plants: [
      {
        name: 'kentia',
        _id: '1a',
        image: 'img.com',
        room: 'bedroom',
        nextWaterDate: '10/06/21',
        nextMistDate: '10/06/21',
        nextTransplantDate: '10/06/21',
      },
      {
        name: 'kentia',
        _id: '1a',
        image: 'img.com',
        room: 'bedroom',
        nextWaterDate: '10/06/21',
        nextMistDate: '10/06/21',
        nextTransplantDate: '10/06/21',
      },
    ],
  });
  const plant = {
    name: 'kentia',
    _id: '1a',
    image: 'img.com',
    room: 'bedroom',
    nextWaterDate: '10/06/21',
    nextMistDate: '10/06/21',
    nextTransplantDate: '10/06/21',
  };

  describe('When ReminderCard function is invoked,', () => {
    test('Then PlantCard component renders correctly', () => {
      const wrapper = render(
        <Provider store={myStore}>
          <ReminderCard plant={plant} />
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
