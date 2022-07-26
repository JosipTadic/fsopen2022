import React from "react";

const Persons = ({ persons, nameFilter }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(nameFilter) ? true : false
        )
        .map((person) => (
          <p key={person.id}>{person.name + " " + person.number}</p>
        ))}
    </>
  );
};
export default Persons;
