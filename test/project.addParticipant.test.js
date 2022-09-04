import Participant from '../src/participant';
import Project from '../src/project';

test('Project.getName', () => {
  let p1 = new Participant(5, 'Juan Pérez', 1);
  let p2 = new Participant(6, 'María Ramos', 2);
  let p3 = new Participant(5, 'Juan Pérez 2', 3);

  let obj = new Project('Sensor Network');

  expect(obj.addParticipant(p1)).toBe(true);
  expect(obj._team[0].getTypeName().toLowerCase()).toBe('estudiante');

  expect(obj.addParticipant(p2)).toBe(true);
  expect(obj._team[1].getName()).toBe('MARÍA RAMOS');

  expect(obj.addParticipant(p3)).toBe(false);
  expect(obj._team[0].getName()).toBe('JUAN PÉREZ');
  expect(obj._team[1].getName()).toBe('MARÍA RAMOS');
});
