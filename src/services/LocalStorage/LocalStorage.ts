import { BaseStorage } from '../BaseStorage/BaseStorage';

class LocalStorage extends BaseStorage {
  constructor() {
    super(window.localStorage);
  }
}

const _localStorage = new LocalStorage();

export { _localStorage as LocalStorage };
