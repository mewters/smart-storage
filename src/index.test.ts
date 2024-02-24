/* eslint-disable @typescript-eslint/unbound-method */
import { LocalStorage, SessionStorage, CookieStorage } from '.';

describe('index', () => {
  it('should export LocalStorage', () => {
    expect(LocalStorage).toBeDefined();
  });

  it('should export SessionStorage', () => {
    expect(SessionStorage).toBeDefined();
  });

  it('should export CookieStorage', () => {
    expect(CookieStorage).toBeDefined();
  });
});
