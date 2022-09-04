import Item from '../src/item';

test('Item constructor', () => {
  let obj = new Item('SmartPhone', 10, 4);

  expect(obj._name.toLowerCase()).toBe('smartphone');
  expect(obj._cost).toBe(10);
  expect(obj._quantity).toBe(4);
});
