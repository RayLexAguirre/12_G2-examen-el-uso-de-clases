import Participant from '../src/participant';
import Project from '../src/project';

test('Project.getName', () => {
  let p1 = new Participant(5, 'Juan Pérez', 3);
  let p2 = new Participant(6, 'Juan Pérez', 3);

  let p3 = new Participant(7, 'María Ramos', 2);
  let p4 = new Participant(8, 'María Ramos', 2);
  let p5 = new Participant(9, 'María Ramos', 2);

  let p6 = new Participant(10, 'Juan Pérez 2', 1);
  let p7 = new Participant(11, 'Juan Pérez 2', 1);
  let p8 = new Participant(12, 'Juan Pérez 2', 1);
  let p9 = new Participant(13, 'Juan Pérez 2', 1);
  let p10 = new Participant(14, 'Juan Pérez 2', 1);

  let obj = new Project('Sensor Network');

  obj.addParticipant(p1);
  obj.addParticipant(p3);
  obj.addParticipant(p5);
  obj.addParticipant(p7);
  obj.addParticipant(p9);
  obj.addParticipant(p2);
  obj.addParticipant(p4);
  obj.addParticipant(p6);
  obj.addParticipant(p8);
  obj.addParticipant(p10);

  expect(obj.getNumParticipants(1)).toBe(5);
  expect(obj.getNumParticipants(2)).toBe(3);
  expect(obj.getNumParticipants(3)).toBe(2);
});
