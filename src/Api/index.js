import axios from 'axios';

const API = axios.create({ baseURL: 'https://cropify-api.herokuapp.com/' });

export const getPrediction = (predictionData) => API.post('/yield-prediction', predictionData);
export const getRecommendation = (recData) => API.post('/crop-recommendation', recData);
