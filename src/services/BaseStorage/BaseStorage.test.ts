/* eslint-disable @typescript-eslint/unbound-method */
import { BaseStorage } from './BaseStorage';

describe('BaseStorage', () => {
  let baseStorage: BaseStorage;
  let storage: Storage;

  beforeEach(() => {
    storage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
      length: 0,
      key: jest.fn(),
    };
    baseStorage = new BaseStorage(storage);
  });

  it('should get value from storage', () => {
    const key = 'key';
    const value = 'value';
    (storage.getItem as jest.Mock).mockReturnValue(value);
    expect(baseStorage.get(key, '')).toBe(value);
    expect(storage.getItem).toBeCalledWith(key);
  });

  it('should set value to storage', () => {
    const key = 'key';
    {
      const value = 'value';
      baseStorage.set(key, value);
      expect(storage.setItem).toBeCalledWith(key, value);
    }
    {
      const value = { key: 'value' };
      baseStorage.set(key, value);
      expect(storage.setItem).toBeCalledWith(key, JSON.stringify(value));
    }
  });

  it('should remove value from storage', () => {
    const key = 'key';
    baseStorage.remove(key);
    expect(storage.removeItem).toBeCalledWith(key);
  });

  it('should remove items from storage', () => {
    const keys = ['key1', 'key2'];
    baseStorage.removeItems(keys);
    expect(storage.removeItem).toBeCalledWith(keys[0]);
    expect(storage.removeItem).toBeCalledWith(keys[1]);
  });

  it('should clear storage', () => {
    baseStorage.clear();
    expect(storage.clear).toBeCalled();
  });
});
