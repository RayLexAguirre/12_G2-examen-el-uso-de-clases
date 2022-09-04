import Participant from '../src/participant';

test('Participant.getTypeName()', () => {
  let obj = new Participant(5, 'Juan Pérez', 2);
  expect(obj.getTypeName().toLowerCase()).toBe('asesor');

  obj = new Participant(5, 'Juan Pérez', -2);
  expect(obj.getTypeName().toLowerCase()).toBe('estudiante');

  obj = new Participant(5, 'Juan Pérez', 20);
  expect(obj.getTypeName().toLowerCase()).toBe('estudiante');
});
