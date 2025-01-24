import axios from 'axios';
const API_URL = 'http://localhost:5000/api/services';

export const getServices = async () => axios.get(`${API_URL}/`);
export const submitForm = async (data) => axios.post(`${API_URL}/submit`, data);
