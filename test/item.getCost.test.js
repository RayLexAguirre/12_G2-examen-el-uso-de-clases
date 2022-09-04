import Item from '../src/item';

test('Item.getCost()', () => {
  let obj = new Item('SmartPhone', 10, 4);

  expect(obj.getCost()).toBe(10);
});
