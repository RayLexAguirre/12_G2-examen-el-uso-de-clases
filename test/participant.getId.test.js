import Participant from '../src/participant';

test('Participant.getId()', () => {
  let obj = new Participant(5, 'Juan Pérez', 2);
  expect(obj.getId()).toBe(5);
});
