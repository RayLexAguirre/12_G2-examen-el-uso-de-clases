import Item from '../src/item';

test('Item.getQuantity()', () => {
  let obj = new Item('SmartPhone', 10, 4);

  expect(obj.getQuantity()).toBe(4);
});
