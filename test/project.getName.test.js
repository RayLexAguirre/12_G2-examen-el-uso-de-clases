import Project from '../src/project';

test('Project.getName', () => {
  let obj = new Project('Sensor Network');

  expect(obj.getName()).toBe('SENSOR NETWORK');
});
