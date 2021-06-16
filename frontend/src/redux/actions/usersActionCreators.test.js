import axios from 'axios';
import {updateUser} from './usersActionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given updateUser function, ', () => {
  test('When resolved, dispatch an object with type: UPDATE_USER and user: data', async () => {
    const user = {
      email: 'laura@email.com',
      password: '123',
      plants: [{name: 'kentia', plantId: 1}],
    };
    const dispatch = jest.fn();
    const data = {
      email: 'laura@email.com',
      password: '123',
      plants: [
        {name: 'kentia', plantId: 1},
        {name: 'potus', plantId: 2},
      ],
    };
    axios.put.mockResolvedValue({data});
    await updateUser(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_USER,
      user: {
        email: 'laura@email.com',
        password: '123',
        plants: [
          {name: 'kentia', plantId: 1},
          {name: 'potus', plantId: 2},
        ],
      },
    });
  });

  test('when rejected, then return USER_ERROR', async () => {
    const user = {
      email: 'laura@email.com',
      password: '123',
      plants: [{name: 'kentia', plantId: 1}],
    };
    const dispatch = jest.fn();
    axios.put.mockRejectedValue('error');
    await updateUser(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'USER_ERROR'});
  });
});
