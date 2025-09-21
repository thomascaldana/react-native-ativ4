# React Native - Atividade 4

Este é um projeto React Native que implementa um catálogo de produtos com navegação entre telas, baseado na API dummyjson.

## 📱 Funcionalidades

- **Listagem de Produtos**: Tela principal com lista de produtos em cards modernos
- **Detalhes do Produto**: Tela de detalhes com informações completas do produto
- **Navegação**: Navegação fluida entre as telas usando Expo Router
- **Design Moderno**: Interface responsiva e atrativa com componentes estilizados

## Tecnologias Utilizadas

- React Native
- Expo Router
- TypeScript
- API dummyjson (requisições reais)
- React Native Safe Area Context

## Estrutura do Projeto

```
app/
├── _layout.tsx          # Configuração de navegação
├── index.tsx            # Tela de listagem de produtos
└── product/
    └── [id].tsx         # Tela de detalhes do produto

data/
└── mockProducts.ts      # Tipos e interfaces dos produtos

services/
└── api.ts              # Serviços de API para dummyjson
```

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o projeto:
```bash
npm start
```

3. Use o QR code para abrir no Expo Go ou pressione:
   - `a` para Android
   - `i` para iOS
   - `w` para Web

## API Integration

O projeto agora utiliza a API real da dummyjson com:
- Requisições HTTP para buscar produtos
- Estados de loading durante carregamento
- Tratamento de erros com retry
- Pull-to-refresh na listagem
- Navegação segura com SafeAreaView

## Design

- Interface moderna com cards sombreados
- Sistema de avaliação com estrelas
- Carrossel de imagens
- SafeAreaView para evitar invasão de áreas do sistema
- Cores consistentes e tipografia legível
- Estados de loading e erro bem definidos

## ✨ Funcionalidades Implementadas

- ✅ Listagem de produtos da API real
- ✅ Detalhes completos do produto
- ✅ Estados de loading e erro
- ✅ Pull-to-refresh
- ✅ SafeAreaView configurado
- ✅ Navegação entre telas
- ✅ Interface responsiva

##  Telas

### Tela Principal (Listagem)
- Lista de produtos em cards
- Informações resumidas de cada produto
- Navegação ao tocar no produto

### Tela de Detalhes
- Carrossel de imagens
- Informações completas do produto
- Reviews e avaliações
- Botão de adicionar ao carrinho
