const add = (a, b) => a + b;
const generateGreeting = (name) => `hello ${name}!`

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('hello Mike!');
});