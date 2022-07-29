import { useState, useEffect } from "react";
import NetworkMessage from "./components/NetworkMessage";
import PersonFilter from "./components/PersonFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [networkMessage, setNetworkMessage] = useState(null);

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
      personService
        .deletePerson(personToDelete.id)
        .then(() => getAllPersons())
        .catch((err) => showErrorMessage(personToDelete.name));
  };

  const showErrorMessage = (nameError) => {
    setNetworkMessage({
      message: `Information of ${nameError} has already been removed from server`,
      isError: true,
    });

    const messageTimeout = setTimeout(() => {
      setNetworkMessage(null);
      clearTimeout(messageTimeout);
    }, 3000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {networkMessage && (
        <NetworkMessage
          text={networkMessage.message}
          isError={networkMessage.isError}
        />
      )}
      <PersonFilter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        getAllPersons={getAllPersons}
        setNetworkMessage={setNetworkMessage}
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
