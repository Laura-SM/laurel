import React from 'react';
import MyReminders from './index';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ReminderCard from '../ReminderCard/index';

describe('Given a MyReminders component', () => {
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

  describe('When is invoked', () => {
    test('Then it is renders correctly', () => {
      const wrapper = render(
        <Provider store={store}>
          <MyReminders>
            <ReminderCard />
          </MyReminders>
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
