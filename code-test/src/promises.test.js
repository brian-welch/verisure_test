describe('getRandomValue', () => {
  const getRandomValue = (min = 0, max = 1) => {
    return new Promise(function(resolve, reject){
      let randomInteger = Math.floor(Math.random() * (max - min)) + min;
      resolve(randomInteger);
    });
  };

  // returning a simple promise function with only a successfull callback - seemed reasonable considering the nature of the task

  it('returns a promise of a random integer', () => {
    getRandomValue().then(value => assert.isNumber(value));
  });
});



describe('getFourRandomValues', () => {
  const getFourRandomValues = (min, max) => {
    return new Promise((resolve, reject) => {
      let randomIntegerArray = [];
      for(let i = 0; i < 4; i++){
        getRandomValue(20,30).then(x => {
          randomIntegerArray.push(x)
        });
      }
      resolve(randomIntegerArray);
    });
  };
  // array creating function was also set in a promise to assure to wait to run until its dependant promise has run
  it('returns an array of four integers, generated by getRandomValue()', () => {
    getFourRandomValues().then(values => assert.lengthOf(values, 4));
  });
});
