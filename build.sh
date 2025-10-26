#!/bin/bash

echo "🚀 SchedulerAI PRO - Script de Build"
echo "=================================="

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para imprimir com cor
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se estamos no diretório correto
if [ ! -d "backend" ] || [ ! -d "frontend" ]; then
    print_error "Execute este script na raiz do projeto (onde estão as pastas backend e frontend)"
    exit 1
fi

print_status "Iniciando build do projeto..."

# Build do Frontend
print_status "Construindo frontend..."
cd frontend

if [ ! -f "package.json" ]; then
    print_error "package.json não encontrado no frontend"
    exit 1
fi

# Instalar dependências
print_status "Instalando dependências do frontend..."
npm install

if [ $? -ne 0 ]; then
    print_error "Falha ao instalar dependências do frontend"
    exit 1
fi

# Build de produção
print_status "Fazendo build de produção do frontend..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Falha no build do frontend"
    exit 1
fi

print_status "Frontend buildado com sucesso!"
cd ..

# Verificar Backend
print_status "Verificando backend..."
cd backend

if [ ! -f "requirements.txt" ]; then
    print_error "requirements.txt não encontrado no backend"
    exit 1
fi

if [ ! -f "api_server.py" ]; then
    print_error "api_server.py não encontrado no backend"
    exit 1
fi

print_status "Backend verificado com sucesso!"
cd ..

print_status "✅ Build concluído com sucesso!"
echo ""
print_status "Próximos passos:"
echo "1. Faça commit das mudanças: git add . && git commit -m 'Deploy ready'"
echo "2. Siga as instruções no arquivo DEPLOY.md"
echo "3. Deploy do backend no Railway"
echo "4. Deploy do frontend no Vercel"
echo ""
print_warning "Lembre-se de atualizar a URL da API no vercel.json após o deploy do backend!"
