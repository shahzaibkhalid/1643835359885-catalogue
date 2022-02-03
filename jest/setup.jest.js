import 'cross-fetch/polyfill';
import '@testing-library/jest-dom';

//mock API server using MSW
import server from '../src/ui/__test-utils__/mocks/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
