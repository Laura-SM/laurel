import React from 'react';
import {FlatList} from 'react-native';
import PlantsSearcher from './index';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import PlantCard from '../PlantCard/index';

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
      const wrapper = render(
        <Provider store={store}>
          <PlantsSearcher>
            <PlantCard />
          </PlantsSearcher>
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
