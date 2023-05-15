import playerHealth from '../app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Боец', health: 40 }, 'wounded'],
  [{ name: 'Черт', health: 9 }, 'critical'],
])('return string', (obj, expected) => {
  const result = playerHealth(obj);
  expect(result).toBe(expected);
});
