import Item from '../src/item';

test('Item.getTotalCost()', () => {
  let obj = new Item('SmartPhone', 10, 4);

  expect(obj.getTotalCost()).toBe(40);
});
