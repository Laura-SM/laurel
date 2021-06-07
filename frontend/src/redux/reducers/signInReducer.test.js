import signInReducer from './signInReducer';
import actionTypes from '../actions/actionTypes';

describe('Given signInReducer function ', () => {
  test('when resolved with SIGNIN_USER, then should return userTokens', () => {
    expect(
      signInReducer(
        {},
        {
          type: actionTypes.SIGNIN_USER,
          userTokens: {tokens: 'abc123'},
        },
      ),
    ).toEqual({tokens: 'abc123'});
  });

  test('when resolved with default, then should return userTokens', () => {
    expect(
      signInReducer(undefined, {
        type: actionTypes.USER_ERROR,
      }),
    ).toEqual({});
  });
});
