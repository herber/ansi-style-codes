const ansi = require('./');

test('exports object', () => {
  expect(ansi).toBeDefined();
  expect(typeof ansi).toBe('object');
});
