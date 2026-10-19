# InvestStart – Frontend

Interface em React + TypeScript, criada com Vite.

## Estrutura

```
src/
├── api/          # chamadas ao backend
├── components/   # componentes da interface
├── test/         # configuração dos testes
├── App.tsx       # página inicial
└── main.tsx      # ponto de entrada
```

## Rodando localmente

Pré-requisito: Node.js 20 ou mais novo.

```powershell
cd frontend
npm install
npm run dev
```

O site abre em http://localhost:5173. Para ver o status da API, deixe o backend rodando em
outro terminal (ver [backend/README.md](../backend/README.md)). Em dev, o Vite manda as chamadas
`/api` direto para `localhost:8000`.

## Qualidade

```powershell
npm run lint           # lint (oxlint)
npm run format:check   # formatação (Prettier)
npm test               # testes (Vitest)
npm run build          # checa os tipos e gera o build
```
