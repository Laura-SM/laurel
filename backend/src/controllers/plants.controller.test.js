const {
  getAllPlants,
  createOnePlant,
  getOnePlantById,
  updateOnePlantById,
  deleteOnePlantById,
} = require('./plants.controller')();

const Plant = require('../models/plant.model');

jest.mock('../models/plant.model');

describe('Given getAllPlants function', () => {
  test('when resolved, then return res.json([{}])', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Plant.find.mockResolvedValueOnce([{}]);
    await getAllPlants(null, res);
    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('when rejected, then return res.send(error)', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Plant.find.mockRejectedValueOnce('error');
    await getAllPlants(null, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given createOnePlant function', () => {
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
    Plant.mockReturnValueOnce({
      save: jest.fn().mockResolvedValueOnce({ body: { name: 'name' } }),
    });
    await createOnePlant(req, res);
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
    Plant.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });
    await createOnePlant(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given getOnePlantById function', () => {
  test('when resolved, then return res.json({})', async () => {
    const req = {
      params: {
        plantId: 1,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Plant.findById.mockResolvedValueOnce({ plantId: 1 });
    await getOnePlantById(req, res);
    expect(res.json).toHaveBeenCalledWith({ plantId: 1 });
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        plantId: null,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Plant.findById.mockRejectedValueOnce('error');
    await getOnePlantById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given updateOnePlantById function', () => {
  test('when resolved, then return res.json', async () => {
    const req = {
      params: {
        plantId: 1,
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
    Plant.findByIdAndUpdate.mockResolvedValueOnce({ plantId: 1, name: 'changedName' });
    await updateOnePlantById(req, res);
    expect(res.json).toHaveBeenCalledWith({ plantId: 1, name: 'changedName' });
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        plantId: 1,
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
    Plant.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateOnePlantById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given deleteOnePlantById function', () => {
  test('when resolved, then return res.json', async () => {
    const req = {
      params: {
        plantId: 1,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Plant.findByIdAndDelete.mockResolvedValueOnce({ plantId: 1 });
    await deleteOnePlantById(req, res);
    expect(res.json).toHaveBeenCalledWith();
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        plantId: 1,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Plant.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteOnePlantById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
