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

  // I was forced to find the solution with help from stack overflow, as none of my solutions were working
  // const count = () => {
  //   let countUp = function(n) {
  //     return function() {
  //       n += 1;
  //       return n;
  //     }
  //   };
  //   return countUp;
  // };

  it('returns an increasing number each time it is called', () => {
    assert.equal(count(), 0);
    assert.equal(count(), 1);
    assert.equal(count(), 2);
  });
});
