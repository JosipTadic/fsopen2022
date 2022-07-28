import { useState, useEffect } from "react";
import PersonFilter from "./components/PersonFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  const getAllPersons = () => {
    personService.getAll().then((returnedPersons) => {
      setPersons(returnedPersons);
    });
  };

  useEffect(() => {
    getAllPersons();
  }, []);

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    window.confirm(`Delete ${personToDelete.name}?`) &&
      personService.deletePerson(personToDelete.id).then(getAllPersons());
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        getAllPersons={getAllPersons}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        nameFilter={nameFilter}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
