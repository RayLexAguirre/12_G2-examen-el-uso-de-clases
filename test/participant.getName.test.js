import Participant from '../src/participant';

test('Participant.getName()', () => {
  let obj = new Participant(5, 'Juan Pérez', 2);
  expect(obj.getName()).toBe('JUAN PÉREZ');
});
