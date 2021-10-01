const add = (a, b) => a + b;

it('Just for learn', () => {
  expect(add(2, 4)).toBe(6);
});

it('Just for learn 2', () => {
  expect(add(2, 4)).not.toBe(7);
});

const users = ['jacek', 'placek', 'agatka'];

it('Just for learn 3', () => {
  expect(users).toContain('jacek');
  expect(users).not.toContain('tomato');
});
