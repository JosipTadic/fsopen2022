import React, { useState } from "react";
import personService from "../services/personService";

const PersonForm = ({
  setPersons,
  persons,
  getAllPersons,
  setNetworkMessage,
}) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const checkIfExists = () => {
    return !persons.some((person) => person.name === newName);
  };

  const showSuccessMessage = () => {
    setNetworkMessage({ message: `Added ${newName}`, isError: false });

    const messageTimeout = setTimeout(() => {
      setNetworkMessage(null);
      clearTimeout(messageTimeout);
    }, 3000);
  };

  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    if (checkIfExists()) {
      personService
        .create(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          showSuccessMessage();
        })
        .catch((error) => {
          setNetworkMessage({
            message: error.response.data.error,
            isError: true,
          });
        });
    } else {
      updatePerson();
    }
  };

  const updatePerson = () => {
    const personToUpdate = persons.find((person) => person.name === newName);
    const updatedPerson = {
      name: newName,
      number: newNumber,
    };
    window.confirm(
      `${newName} is already added to phonebook, replace old number with new one?`
    ) &&
      personService
        .updatePerson(personToUpdate.id, updatedPerson)
        .then(() => {
          getAllPersons();
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setNetworkMessage({
            message: error.response.data.error,
            isError: true,
          });
        });
  };

  return (
    <>
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
        <button
          onClick={checkIfExists() ? addPerson : updatePerson}
          type="submit"
        >
          add
        </button>
      </div>
    </>
  );
};
export default PersonForm;
