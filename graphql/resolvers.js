import { getPeople, getById, addPeople } from "./db";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id)
  },
  Mutation: {
    addPeople: (_, { name, age }) => addPeople(name, age)
  }
};

export default resolvers;
