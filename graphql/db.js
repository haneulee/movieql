let people = [
  {
    id: 6,
    name: "Babak",
    age: 18,
    gender: "male"
  },
  {
    id: 3,
    name: "Haneul Lee",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "sunny",
    age: 18,
    gender: "female"
  }
];

export const getPeople = () => people;

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
};

export const deletePeople = id => {
  const cleanedPeople = people.filter(person => id !== person.id);
  if (people.length > cleanedPeople.length) {
    person = cleanedPeople;
    return true;
  } else {
    return false;
  }
};

export const addPeople = (name, age) => {
  const newPeople = {
    id: `${people.length + 1}`,
    name,
    age
  };

  people.push(newPeople);
  return newPeople;
};
