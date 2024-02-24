import { CookieStorage } from './CookieStorage';

describe('CookieStorage', () => {
  beforeEach(() => {
    CookieStorage.clear();
  });

  it('should get cookie value from a string', () => {
    {
      const cookieString = 'key1=value; key2=value2';
      const key = 'key1';
      const value = 'value';
      expect(CookieStorage.getCookieValue(key, cookieString)).toBe(value);
    }
    {
      const cookieString = 'key1=value; key2=value2';
      const key = 'key2';
      const value = 'value2';
      expect(CookieStorage.getCookieValue(key, cookieString)).toBe(value);
    }
    {
      const cookieString = 'key1=value; key2=value2';
      const key = 'key3';
      expect(CookieStorage.getCookieValue(key, cookieString)).toBeUndefined();
    }
    {
      const cookieString = 'key1=; key2=value2';
      const key = 'key1';
      expect(CookieStorage.getCookieValue(key, cookieString)).toBe('');
    }
    {
      const cookieString = '';
      const key = '';
      const value = undefined;
      expect(CookieStorage.getCookieValue(key, cookieString)).toBe(value);
    }
  });

  it('should get value from storage', () => {
    const key = 'key';
    {
      const value = 'value';
      expect(CookieStorage.get(key, value)).toBe(value);
    }
    {
      const value = 1;
      expect(CookieStorage.get(key, value)).toBe(value);
    }
    {
      const value = { key: 'value' };
      expect(CookieStorage.get(key, value)).toBe(value);
    }
  });

  it('should set value to storage', () => {
    expect(document.cookie).toBe('');

    {
      const key = 'key';
      const value = 'value';

      CookieStorage.set(key, value);
      expect(CookieStorage.get(key, '')).toBe(value);
    }
    {
      const key = 'key';
      const value = { key: 'value' };

      CookieStorage.set(key, value);
      expect(CookieStorage.get(key, '')).toStrictEqual(value);
    }
  });

  it('should remove value from storage', () => {
    const key = 'key';
    const value = 'value';

    CookieStorage.set(key, value);
    expect(CookieStorage.get(key, '')).toBe(value);

    CookieStorage.remove(key);
    expect(CookieStorage.get(key, '')).toBe('');
  });

  it('should remove items from storage', () => {
    const key1 = 'key1';
    const value1 = 'value1';
    const key2 = 'key2';
    const value2 = 'value2';

    CookieStorage.set(key1, value1);
    CookieStorage.set(key2, value2);

    expect(CookieStorage.get(key1, '')).toBe(value1);
    expect(CookieStorage.get(key2, '')).toBe(value2);

    CookieStorage.removeItems([key1, key2]);

    expect(CookieStorage.get(key1, '')).toBe('');
    expect(CookieStorage.get(key2, '')).toBe('');
  });

  it('should clear storage', () => {
    const key1 = 'key1';
    const value1 = 'value1';
    const key2 = 'key2';
    const value2 = 'value2';

    CookieStorage.set(key1, value1);
    CookieStorage.set(key2, value2);

    expect(CookieStorage.get(key1, '')).toBe(value1);
    expect(CookieStorage.get(key2, '')).toBe(value2);

    CookieStorage.clear();

    expect(CookieStorage.get(key1, '')).toBe('');
    expect(CookieStorage.get(key2, '')).toBe('');
  });
});
