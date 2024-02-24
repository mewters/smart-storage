import { BaseStorage } from '../BaseStorage/BaseStorage';

class SessionStorage extends BaseStorage {
  constructor() {
    super(window.sessionStorage);
  }
}

const _sessionStorage = new SessionStorage();

export { _sessionStorage as SessionStorage };
