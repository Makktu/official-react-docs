const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const People = () => {
  const personsList = people.map((person) => (
    <li key={person.id}>{person.name + ": " + person.profession}</li>
  ));
  return (
    <>
      <ul>{personsList}</ul>
    </>
  );
};

export default People;
