import Ship from '../factories/ship.js';

describe('BattleShip object', () => {
  let boat;
  beforeEach(() => {
    boat = new Ship(2);
  });

  test('hits should increment only when hits is lower than length', () => {
    boat.hit();
    expect(boat.hit()).toBe(2);
  });

  it("shouldn't increment hits if hits is greater or equal to length", () => {
    boat.hit();
    boat.hit();
    expect(boat.hit()).toBe(2);
  });

  test('isSunk method to return false by default', () => {
    expect(boat.isSunk()).toHaveProperty('sunked', false);
  });

  it('should return true if hits is >= length', () => {
    boat.hit();
    boat.hit();
    expect(boat.isSunk()).toHaveProperty('sunked', true);
  });
});
