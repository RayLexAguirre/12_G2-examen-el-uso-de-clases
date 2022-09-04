import Participant from '../src/participant';

test('Item constructor', () => {
  let obj = new Participant(5, 'Juan Pérez', 2);

  expect(obj._id).toBe(5);
  expect(obj._name.toLowerCase()).toBe('juan pérez');
  expect(obj._type).toBe(2);

  obj = new Participant(5, 'Juan Pérez', 0);
  expect(obj._type).toBe(1);
});
