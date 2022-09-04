import Project from '../src/project';

test('Project constructor', () => {
  let obj = new Project('Sensor Network');

  expect(obj._name.toLowerCase()).toBe('sensor network');
  expect(Array.isArray(obj._team)).toBe(true);
  expect(Array.isArray(obj._resources)).toBe(true);
});
