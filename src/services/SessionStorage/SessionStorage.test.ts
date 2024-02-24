/* eslint-disable @typescript-eslint/unbound-method */
import { SessionStorage } from './SessionStorage';

describe('SessionStorage', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it('should get default value from storage when key is not found', () => {
    const key = 'key';
    {
      const value = 'value';
      expect(SessionStorage.get(key, value)).toBe(value);
    }
    {
      const value = 1;
      expect(SessionStorage.get(key, value)).toBe(value);
    }
    {
      const value = { key: 'value' };
      expect(SessionStorage.get(key, value)).toBe(value);
    }
  });

  it('should set value to storage', () => {
    const key = 'key';
    const value = 'value';

    expect(window.sessionStorage.getItem(key)).toBe(null);
    SessionStorage.set(key, value);
    expect(window.sessionStorage.getItem(key)).toBe(value);
  });

  it('should remove value from storage', () => {
    const key = 'key';
    const value = 'value';

    SessionStorage.set(key, value);
    expect(window.sessionStorage.getItem(key)).toBe(value);

    SessionStorage.remove(key);
    expect(window.sessionStorage.getItem(key)).toBe(null);
  });

  it('should remove items from storage', () => {
    const key1 = 'key1';
    const value1 = 'value1';
    const key2 = 'key2';
    const value2 = 'value2';

    SessionStorage.set(key1, value1);
    SessionStorage.set(key2, value2);

    expect(window.sessionStorage.getItem(key1)).toBe(value1);
    expect(window.sessionStorage.getItem(key2)).toBe(value2);

    SessionStorage.removeItems([key1, key2]);

    expect(window.sessionStorage.getItem(key1)).toBe(null);
    expect(window.sessionStorage.getItem(key2)).toBe(null);
  });

  it('should clear storage', () => {
    const key1 = 'key1';
    const value1 = 'value1';
    const key2 = 'key2';
    const value2 = 'value2';

    SessionStorage.set(key1, value1);
    SessionStorage.set(key2, value2);

    expect(window.sessionStorage.getItem(key1)).toBe(value1);
    expect(window.sessionStorage.getItem(key2)).toBe(value2);

    SessionStorage.clear();

    expect(window.sessionStorage.getItem(key1)).toBe(null);
    expect(window.sessionStorage.getItem(key2)).toBe(null);
  });
});
