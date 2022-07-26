import React from "react";

const Persons = ({ persons, nameFilter, deletePerson }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(nameFilter) ? true : false
        )
        .map((person) => (
          <p key={person.id}>
            {person.name + " " + person.number}
            <button onClick={() => deletePerson(person.id)}>delete</button>
          </p>
        ))}
    </>
  );
};
export default Persons;
