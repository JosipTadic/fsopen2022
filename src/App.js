import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    if (checkIfExists()) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const checkIfExists = () => {
    return persons.some((person) => person.name === newName);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:
        <input
          onChange={(e) => setNameFilter(e.target.value)}
          value={nameFilter}
        />
      </div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div>
          number:{" "}
          <input
            onChange={(e) => setNewNumber(e.target.value)}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(nameFilter) ? true : false
        )
        .map((person) => (
          <p key={person.id}>{person.name + " " + person.number}</p>
        ))}
    </div>
  );
};

export default App;
