const {
  createOneUser,
  getOneUserById,
  updateOneUserById,
  deleteOneUserById,
} = require('./users.controller')();

const User = require('../models/user.model');

jest.mock('../models/user.model');

describe('Given createOneUser function', () => {
  test('when resolved, then return res.json({})', async () => {
    const req = {
      body: {
        name: 'name',
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    User.mockReturnValueOnce({
      save: jest.fn().mockResolvedValueOnce({ body: { name: 'name' } }),
    });
    await createOneUser(req, res);
    expect(res.json).toHaveBeenCalledWith({ body: { name: 'name' } });
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      body: null,
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    User.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });
    await createOneUser(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given getOneUserById function', () => {
  test('when resolved, then return res.json({})', async () => {
    const req = {
      params: {
        userId: 1,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    User.findById.mockResolvedValueOnce({ userId: 1 });
    await getOneUserById(req, res);
    expect(res.json).toHaveBeenCalledWith({ userId: 1 });
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        userId: null,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    User.findById.mockRejectedValueOnce('error');
    await getOneUserById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given updateOneUserById function', () => {
  test('when resolved, then return res.json', async () => {
    const req = {
      params: {
        userId: 1,
      },
      body: {
        name: 'name',
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    User.findByIdAndUpdate.mockResolvedValueOnce({ userId: 1, name: 'changedName' });
    await updateOneUserById(req, res);
    expect(res.json).toHaveBeenCalledWith({ userId: 1, name: 'changedName' });
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        userId: 1,
      },
      body: {
        name: 'name',
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    User.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateOneUserById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given deleteOneUserById function', () => {
  test('when resolved, then return res.json', async () => {
    const req = {
      params: {
        userId: 1,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    User.findByIdAndDelete.mockResolvedValueOnce({ userId: 1 });
    await deleteOneUserById(req, res);
    expect(res.json).toHaveBeenCalledWith();
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        userId: 1,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    User.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteOneUserById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
