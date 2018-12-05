const people = [
  {
    name: 'Fred',
    age: 27,
    interests: [
      'bowling',
      'golf',
    ],
  },
  {
    name: 'Wilma',
    age: 25,
    interests: [
      'running',
      'cinema',
    ],
  },
  {
    name: 'Barney',
    age: 28,
    interests: [
      'bowling',
      'running',
      'swimming',
    ],
  }
];

describe('getNamesOfPeopleOver', () => {
  const getNamesOfPeopleOver = limit => {
    let names = [];
    people.forEach((person) => {
      if (person.age > limit) {
        console.log(person.name);
        names.push(person.name);
      }
    });
    return names;
    // En interation through the JSON object looking for instances that met a given criteria
  };

  it('returns an array of the names of all people over the given age', () => {
    assert.deepEqual(getNamesOfPeopleOver(26), ['Fred', 'Barney']);
  });
});

describe('getSumOfAllAges', () => {
  const getSumOfAllAges = () => {
    let sum = 0;
    people.forEach((person) => {
      sum += person.age
    });
    return sum;
    // iterating through JSON to sum all names into a variable and return that variable.
  };

  it('calculates the sum of all ages', () => {
    assert.equal(getSumOfAllAges(), 80);

  });
});

describe('getInterests', () => {
  const getInterests = () => {
    let interests = [];
    people.forEach((person) => {
      person.interests.forEach((interest) => {
        if (interests.indexOf(interest) < 0) {
          interests.push(interest);
        }
      });
    });
    interests.sort();
    return interests;
    // iterated through and array of interests, within an JSON array, pushing in values only after first identifying unique values whtin the array
  };

  it('returns a array of all interests, no duplicates, sorted', () => {
    assert.deepEqual(getInterests(), ['bowling', 'cinema', 'golf', 'running', 'swimming']);
  });
});



describe('getNamesAndInterests', () => {
  const getNamesAndInterests = () => {
    let json = {};
    people.forEach((person) => {
      json[person.name] = [];
      person.interests.forEach((interest)=>{
        json[person.name].push(interest);
      });
    });
    return json;
    // Created an empty object, set each name as an object instance key with an empty array as a value, then filled the array with the person's interests
  };

  it('returns an object with the names as keys, and the interests as values', () => {
    const expected = {
      Fred: [
        'bowling',
        'golf',
      ],
      Wilma: [
        'running',
        'cinema',
      ],
      Barney: [
        'bowling',
        'running',
        'swimming',
      ],
    };

    assert.deepEqual(getNamesAndInterests(), expected);
  });
});
