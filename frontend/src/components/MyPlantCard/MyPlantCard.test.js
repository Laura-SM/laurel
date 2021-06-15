import React from 'react';
import MyPlantCard from './MyPlantCard';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

describe('Given a PlantsSearcher component', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    plants: [
      {name: 'kentia', _id: '1a'},
      {name: 'potus', _id: '2a'},
    ],
  });

  describe('When is invoked', () => {
    test('Then it is renders correctly', () => {
      const tree = render(
        <Provider store={store}>
          <MyPlantCard />
        </Provider>,
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
