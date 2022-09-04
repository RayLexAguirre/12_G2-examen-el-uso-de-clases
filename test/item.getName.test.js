import Item from '../src/item';

test('Item.getName()', () => {
  let obj = new Item('SmartPhone', 10, 4);

  expect(obj.getName()).toBe('SMARTPHONE');
});
