import React from 'react';
import { API_ENDPOINTS } from '../config';

const DebugInfo = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#f0f0f0', 
      padding: '10px', 
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      <h4>Debug Info:</h4>
      <p><strong>API URL:</strong> {process.env.REACT_APP_API_URL || 'NÃO DEFINIDA'}</p>
      <p><strong>Simulate Endpoint:</strong> {API_ENDPOINTS.SIMULATE}</p>
      <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
    </div>
  );
};

export default DebugInfo;
