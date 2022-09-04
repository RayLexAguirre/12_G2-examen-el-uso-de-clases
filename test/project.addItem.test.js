import Item from '../src/item';
import Project from '../src/project';

test('Project.getName', () => {
  let i1 = new Item('SmartPhone', 10, 4);
  let i2 = new Item('Computadora personal', 123, 3);
  let i3 = new Item('SmartPhone', 321, 5);

  let obj = new Project('Sensor Network');

  obj.addItem(i1);
  expect(obj._resources[0].getTotalCost()).toBe(40);

  obj.addItem(i2);
  expect(obj._resources[1].getTotalCost()).toBe(369);

  obj.addItem(i3);
  expect(obj._resources[2].getTotalCost()).toBe(1605);
});
