import axios from "axios";
const personsUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(`${personsUrl}`);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(`${personsUrl}`, newPerson);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${personsUrl}/${id}`);
  return request.then((response) => response.data);
};

const updatePerson = (id, phoneNumber) => {
  const request = axios.put(`${personsUrl}/${id}`, phoneNumber);
  return request.then((response) => response.data);
};

export default { getAll, create, deletePerson, updatePerson };
