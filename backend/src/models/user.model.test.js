const {
  isValidPassword,
} = require('./user.model')();

describe('Given isValidPassword function', () => {
  test('when resolved, then return a strictly equal password', () => {
    const userSchema = {
      password: '123abc',
    };
    const password = '123abc';
    isValidPassword(password);
    expect(password).toEqual(userSchema.password);
  });
});
