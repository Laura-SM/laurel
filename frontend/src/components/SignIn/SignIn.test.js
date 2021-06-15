import 'react-native';
import React from 'react';
import SignIn from './index';
import thunk from 'redux-thunk';
import Store from 'redux-mock-store';
import * as actions from '../../redux/actions/authActionCreators';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

describe('Given a SignIn component', () => {
  const mockStore = Store([thunk]);
  let navigation;
  let myStore;

  beforeEach(() => {
    jest.spyOn(actions, 'signInUser').mockReturnValueOnce({type: ''});
    myStore = mockStore({
      userAccess: {
        user: {email: 'laura@email.com', password: '1a'},
      },
    });
    navigation = {
      navigate: jest.fn(),
    };
  });

  describe('When invoques SignIn function', () => {
    test('Then SignIn component renders correctly', () => {
      const wrapper = render(
        <Provider store={myStore}>
          <SignIn />
        </Provider>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When a registerd user is sign in', () => {
    test('Then navigation is invoked ', () => {
      myStore = mockStore({
        userAccess: {
          user: {email: 'laura@email.com', password: '1a'},
          token: 'abc123',
        },
      });
      render(
        <Provider store={myStore}>
          <SignIn navigation={navigation} />
        </Provider>,
      );

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });

  describe('When Sign In button is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <SignIn navigation={navigation} />
        </Provider>,
      );
      const signIn = getByTestId('signIn');
      fireEvent.press(signIn);

      expect(actions.signInUser).toHaveBeenCalled();
    });
  });

  describe('When emailInput is typing with laura@email.com', () => {
    test('Then emailInput value is laura@email.com', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <SignIn />
        </Provider>,
      );
      const emailInput = getByTestId('emailInput');
      const email = 'laura@email.com';
      fireEvent.changeText(emailInput, email);

      expect(emailInput.props.value).toBe(email);
    });
  });

  describe('When passwordInput is typing with 123', () => {
    test('Then passwordInput value is 123', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <SignIn />
        </Provider>,
      );
      const passwordInput = getByTestId('passwordInput');
      const password = '123';
      fireEvent.changeText(passwordInput, password);

      expect(passwordInput.props.value).toBe(password);
    });
  });

  describe('When Create new pressable text is pressed', () => {
    test('Then navigation.navigate is invoked', () => {
      const {getByTestId} = render(
        <Provider store={myStore}>
          <SignIn navigation={navigation} />
        </Provider>,
      );
      const register = getByTestId('goSignUp');
      fireEvent.press(register);

      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
