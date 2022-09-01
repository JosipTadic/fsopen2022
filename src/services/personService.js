import axios from "axios";
const personsUrl = "/api/persons";
const personUrl = "/api/person";

const getAll = () => {
  const request = axios.get(
    `${process.env.REACT_APP_PHONEBOOK_BASE_URL + personsUrl}`
  );
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(
    `${process.env.REACT_APP_PHONEBOOK_BASE_URL + personsUrl}`,
    newPerson
  );
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(
    `${process.env.REACT_APP_PHONEBOOK_BASE_URL + personUrl}/${id}`
  );
  return request.then((response) => response.data);
};

const updatePerson = (id, phoneNumber) => {
  const request = axios.put(
    `${process.env.REACT_APP_PHONEBOOK_BASE_URL + personUrl}/${id}`,
    phoneNumber
  );
  return request.then((response) => response.data);
};

export default { getAll, create, deletePerson, updatePerson };
