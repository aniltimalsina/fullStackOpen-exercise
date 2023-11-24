import axios from "axios";

const baseURL = 'http://localhost:3000/persons';

const getAll = () => {
    return axios.get(baseURL)
}

const create = newObj => {
    return axios.post(baseURL, newObj)
}

export default { getAll, create }