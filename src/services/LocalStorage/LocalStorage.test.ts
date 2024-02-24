/* eslint-disable @typescript-eslint/unbound-method */
import { LocalStorage } from './LocalStorage';

describe('LocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should get default value from storage when key is not found', () => {
    const key = 'key';
    {
      const value = 'value';
      expect(LocalStorage.get(key, value)).toBe(value);
    }
    {
      const value = 1;
      expect(LocalStorage.get(key, value)).toBe(value);
    }
    {
      const value = { key: 'value' };
      expect(LocalStorage.get(key, value)).toBe(value);
    }
  });

  it('should set value to storage', () => {
    const key = 'key';
    const value = 'value';

    expect(window.localStorage.getItem(key)).toBe(null);
    LocalStorage.set(key, value);
    expect(window.localStorage.getItem(key)).toBe(value);
  });

  it('should remove value from storage', () => {
    const key = 'key';
    const value = 'value';

    LocalStorage.set(key, value);
    expect(window.localStorage.getItem(key)).toBe(value);

    LocalStorage.remove(key);
    expect(window.localStorage.getItem(key)).toBe(null);
  });

  it('should remove items from storage', () => {
    const key1 = 'key1';
    const value1 = 'value1';
    const key2 = 'key2';
    const value2 = 'value2';

    LocalStorage.set(key1, value1);
    LocalStorage.set(key2, value2);

    expect(window.localStorage.getItem(key1)).toBe(value1);
    expect(window.localStorage.getItem(key2)).toBe(value2);

    LocalStorage.removeItems([key1, key2]);

    expect(window.localStorage.getItem(key1)).toBe(null);
    expect(window.localStorage.getItem(key2)).toBe(null);
  });

  it('should clear storage', () => {
    const key1 = 'key1';
    const value1 = 'value1';
    const key2 = 'key2';
    const value2 = 'value2';

    LocalStorage.set(key1, value1);
    LocalStorage.set(key2, value2);

    expect(window.localStorage.getItem(key1)).toBe(value1);
    expect(window.localStorage.getItem(key2)).toBe(value2);

    LocalStorage.clear();

    expect(window.localStorage.getItem(key1)).toBe(null);
    expect(window.localStorage.getItem(key2)).toBe(null);
  });
});
