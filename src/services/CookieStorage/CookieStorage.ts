export class CookieStorage {
  static getCookieValue(
    name: string,
    cookieString: string
  ): string | undefined {
    const value = `; ${cookieString}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
  }

  static get<T>(key: string, defaultValue: T): T {
    const value = this.getCookieValue(key, document.cookie);
    if (value === null || value === undefined) {
      return defaultValue;
    }
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      return value as unknown as T;
    }
  }

  static set<T>(key: string, value: T, days = 365): void {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cookieValue =
      typeof value === 'string' ? value : JSON.stringify(value);
    document.cookie = `${key}=${cookieValue};${expires};path=/`;
  }

  static remove(key: string): void {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  static removeItems(keys: string[]): void {
    keys.forEach(key => this.remove(key));
  }

  static clear(): void {
    document.cookie.split(';').forEach(cookie => {
      const key = cookie.split('=')[0];
      this.remove(key);
    });
  }
}
