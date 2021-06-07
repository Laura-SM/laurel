import axios from 'axios';
import {signInUser, signUpUser} from './authActionCreators';

jest.mock('axios');

describe('Given signInUser function, ', () => {
  test('when resolved, then dispatch an object with type: SIGNIN_USER and userTokens: data', async () => {
    const user = {email: 'laura@laura.com', password: 123};
    const dispatch = jest.fn();
    const data = {token: 'abc123'};
    axios.post.mockResolvedValue({data});
    await signInUser(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SIGNIN_USER',
      userTokens: data,
    });
  });

  test('when rejected, then return USER_ERROR', async () => {
    const user = {email: 'laura@laura.com', password: 123};
    const dispatch = jest.fn();
    axios.post.mockRejectedValue('error');
    await signInUser(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'USER_ERROR'});
  });
});

describe('Given signUpUser function, ', () => {
  test('when resolved, then dispatch an object with type: SIGNIN_USER and user: data', async () => {
    const user = {email: 'laura@laura.com', password: 123};
    const dispatch = jest.fn();
    const data = {email: 'laura@laura.com', password: 123};
    axios.post.mockResolvedValue({data});
    await signUpUser(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SIGNUP_USER',
      user: data,
    });
  });

  test('when rejected, then return USER_ERROR', async () => {
    const user = {email: 'laura@laura.com', password: 123};
    const dispatch = jest.fn();
    axios.post.mockRejectedValue('error');
    await signUpUser(user)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'USER_ERROR'});
  });
});
