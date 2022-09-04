import Participant from '../src/participant';

test('Participant.getType()', () => {
  let obj = new Participant(5, 'Juan Pérez', 2);
  expect(obj.getType()).toBe(2);

  obj = new Participant(5, 'Juan Pérez', -2);
  expect(obj.getType()).toBe(1);

  obj = new Participant(5, 'Juan Pérez', 20);
  expect(obj.getType()).toBe(1);
});
