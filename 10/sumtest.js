// sum.test.js
const sum = require('./sum');

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8); // Trường hợp pass: 3 + 5 = 8
});

test('adds -3 + 5 to equal 2', () => {
  expect(sum(-3, 5)).toBe(2); // Trường hợp pass: -3 + 5 = 2
});

test('adds 3 + 3 to equal 6', () => {
  expect(sum(3, 3)).toBe(6); // Trường hợp pass: 3 + 3 = 6
});

test('adds 3 + 5 not equal 18', () => {
  expect(sum(3, 5)).not.toBe(18); // Trường hợp fail: 3 + 5 ≠ 18
});
