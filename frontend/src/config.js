// Configuração da API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  SIMULATE: `${API_BASE_URL}/api/simulate`,
  ALGORITHMS: `${API_BASE_URL}/api/algorithms`,
  HEALTH: `${API_BASE_URL}/api/health`
};

export default API_BASE_URL;
