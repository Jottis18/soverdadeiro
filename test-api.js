// Script para testar a API do backend
const https = require('https');

// Substitua pela URL real do seu backend
const API_URL = 'https://soverdadeiro-production.up.railway.app';

console.log('🔍 Testando API do backend...');
console.log('URL:', API_URL);

// Teste 1: Health Check
console.log('\n1. Testando Health Check...');
https.get(`${API_URL}/api/health`, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
    
    if (res.statusCode === 200) {
      console.log('✅ Backend está funcionando!');
      testSimulation();
    } else {
      console.log('❌ Backend com problema');
    }
  });
}).on('error', (err) => {
  console.log('❌ Erro ao conectar:', err.message);
});

// Teste 2: Simulação
function testSimulation() {
  console.log('\n2. Testando simulação...');
  
  const testData = {
    processes: [
      { creationTime: 0, duration: 3, priority: 1 }
    ],
    algorithm: 'FCFS',
    config: { quantum: 2, aging: 1 }
  };
  
  const postData = JSON.stringify(testData);
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  
  const req = https.request(`${API_URL}/api/simulate`, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Status:', res.statusCode);
      if (res.statusCode === 200) {
        console.log('✅ Simulação funcionando!');
        console.log('Response:', JSON.parse(data));
      } else {
        console.log('❌ Erro na simulação');
        console.log('Response:', data);
      }
    });
  });
  
  req.on('error', (err) => {
    console.log('❌ Erro na requisição:', err.message);
  });
  
  req.write(postData);
  req.end();
}
