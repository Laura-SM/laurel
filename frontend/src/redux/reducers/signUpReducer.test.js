import signUpReducer from './signUpReducer';
import actionTypes from '../actions/actionTypes';

describe('Given signUpReducer function ', () => {
  test('when resolved with SIGNUP_USER, then should return user', () => {
    expect(
      signUpReducer(
        {},
        {
          type: actionTypes.SIGNUP_USER,
          user: {email: 'laura@laurel.com'},
        },
      ),
    ).toEqual({email: 'laura@laurel.com'});
  });

  test('when resolved with default, then should return user', () => {
    expect(
      signUpReducer(undefined, {
        type: actionTypes.USER_ERROR,
      }),
    ).toEqual({});
  });
});
