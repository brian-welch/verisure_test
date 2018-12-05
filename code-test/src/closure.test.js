describe('multiplier', () => {
  const multiplier = (x) => {
    const result = (y) => {
      return x * y;
    }
    return result;
    // Using an inside closure to remember an input and use it's function twice in a row
  };

  describe('when given a number, a function is returned which when called', () => {
    it('returns the multiplication of the two numbers', () => {
      const times12 = multiplier(12);

      assert.equal(times12(3), 36);
    });
  });
});

describe('counter', () => {
  const count = ((n) => {
    var m = n;
    return () => ++m;
  })(-1);

  //  again utilizing an inner closure to increment, and also calling the function directly to initiate a starting or history of the function


  it('returns an increasing number each time it is called', () => {
    assert.equal(count(), 0);
    assert.equal(count(), 1);
    assert.equal(count(), 2);
  });
});
