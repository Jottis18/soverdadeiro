// Configuração da API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://soverdadeiro-production-1f46.up.railway.app';

// Debug: log da configuração
console.log('🔧 Config API - REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
console.log('🔧 Config API - API_BASE_URL:', API_BASE_URL);

export const API_ENDPOINTS = {
  SIMULATE: `${API_BASE_URL}/api/simulate`,
  ALGORITHMS: `${API_BASE_URL}/api/algorithms`,
  HEALTH: `${API_BASE_URL}/api/health`
};

export default API_BASE_URL;
