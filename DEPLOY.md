# 🚀 Guia de Deploy - SchedulerAI PRO

Este guia te ajudará a subir o projeto na web usando Railway (backend) e Vercel (frontend).

## 📋 Pré-requisitos

- Conta no [Railway](https://railway.app)
- Conta no [Vercel](https://vercel.com)
- Git configurado
- Node.js e Python instalados localmente

## 🏗️ Estrutura do Projeto

```
projetoSO/
├── backend/                 # API Python Flask
│   ├── api_server.py
│   ├── SchedulerNoGUI.py
│   ├── config.txt
│   ├── requirements.txt
│   ├── Procfile
│   └── railway.json
├── frontend/               # App React
│   ├── src/
│   ├── package.json
│   └── vercel.json
└── DEPLOY.md
```

## 🔧 Deploy do Backend (Railway)

### 1. Preparar o Backend

```bash
cd backend
```

### 2. Criar Repositório Git

```bash
git init
git add .
git commit -m "Initial commit - Backend"
```

### 3. Conectar ao Railway

1. Acesse [railway.app](https://railway.app)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Conecte seu repositório
6. Selecione a pasta `backend`

### 4. Configurar Variáveis de Ambiente

No Railway, vá em Settings > Variables e adicione:
- `PORT`: 5000 (já configurado automaticamente)

### 5. Deploy

O Railway fará o deploy automaticamente. Anote a URL gerada (ex: `https://seu-projeto.railway.app`)

## 🎨 Deploy do Frontend (Vercel)

### 1. Preparar o Frontend

```bash
cd frontend
```

### 2. Atualizar URL da API

Edite o arquivo `vercel.json` e substitua `https://seu-backend.railway.app` pela URL real do seu backend:

```json
{
  "env": {
    "REACT_APP_API_URL": "https://SUA-URL-DO-RAILWAY.railway.app"
  }
}
```

### 3. Criar Repositório Git

```bash
git init
git add .
git commit -m "Initial commit - Frontend"
```

### 4. Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Importe seu repositório
5. Selecione a pasta `frontend`
6. Configure:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`

### 5. Configurar Variáveis de Ambiente

No Vercel, vá em Settings > Environment Variables e adicione:
- `REACT_APP_API_URL`: `https://SUA-URL-DO-RAILWAY.railway.app`

### 6. Deploy

Clique em "Deploy" e aguarde o processo.

## 🧪 Testando Localmente

### Backend

```bash
cd backend
pip install -r requirements.txt
python api_server.py
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## 🔍 Verificando o Deploy

1. **Backend**: Acesse `https://sua-url.railway.app/api/health`
2. **Frontend**: Acesse a URL do Vercel

## 🐛 Solução de Problemas

### Backend não inicia
- Verifique se todas as dependências estão no `requirements.txt`
- Confirme se o `Procfile` está correto
- Verifique os logs no Railway

### Frontend não conecta com API
- Confirme se a `REACT_APP_API_URL` está correta
- Verifique se o CORS está configurado no backend
- Teste a API diretamente no navegador

### Erro de CORS
- O backend já está configurado com `CORS(app, origins="*")`
- Se persistir, verifique se a URL da API está correta

## 📝 URLs Importantes

- **Railway Dashboard**: https://railway.app/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Documentação Railway**: https://docs.railway.app
- **Documentação Vercel**: https://vercel.com/docs

## 🎯 Próximos Passos

1. Configure um domínio personalizado (opcional)
2. Configure CI/CD para deploys automáticos
3. Adicione monitoramento e logs
4. Configure backup dos dados

---

**Desenvolvido para a disciplina de Sistemas Operacionais - UFC** 🎓
