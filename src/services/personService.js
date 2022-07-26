import axios from "axios";
const personsUrl = "/persons";

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
    `${process.env.REACT_APP_PHONEBOOK_BASE_URL + personsUrl}/${id}`
  );
  return request.then((response) => response.data);
};

export default { getAll, create, deletePerson };
