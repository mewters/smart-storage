export class BaseStorage {
  constructor(private storage: Storage) {
    this.storage = storage;
  }

  get<T>(key: string, defaultValue: T): T {
    const value = this.storage.getItem(key);
    if (value === null || value === undefined) {
      return defaultValue;
    }
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      return value as unknown as T;
    }
  }

  set<T>(key: string, value: T | string): void {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    this.storage.setItem(key, value);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  removeItems(keys: string[]): void {
    keys.forEach(key => this.remove(key));
  }

  clear(): void {
    this.storage.clear();
  }
}
