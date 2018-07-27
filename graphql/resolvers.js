import { getPeople, getById, addPeople, deletePeople } from "./db";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id)
  },
  Mutation: {
    addPeople: (_, { name, age }) => addPeople(name, age),
    deletePeople: (_, { id }) => deletePeople(id)
  }
};

export default resolvers;
