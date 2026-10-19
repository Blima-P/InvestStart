# Plano de execução

## Arquitetura

```
┌──────────────┐     HTTP/JSON     ┌──────────────────────────────────────┐
│  Frontend    │ ◄───────────────► │  Backend (FastAPI)                   │
│  React + TS  │                   │  ├── collectors/  (coleta de dados)  │
└──────────────┘                   │  ├── analysis/    (score e risco)    │
                                   │  ├── portfolio/   (carteira sugerida)│
                                   │  ├── api/         (rotas REST)       │
                                   │  └── db/          (SQLite/Postgres)  │
                                   └──────────────┬───────────────────────┘
                                                  │
                     brapi · BCB SGS · Tesouro · CoinGecko · yfinance
```

## Estrutura de pastas

```
InvestStart/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── collectors/
│   │   ├── analysis/
│   │   ├── portfolio/
│   │   ├── db/
│   │   └── main.py
│   ├── tests/
│   └── pyproject.toml
├── frontend/
│   ├── src/
│   └── package.json
├── docs/
└── docker-compose.yml
```

## Fases

### Fase 0 – Fundação (semana 1)
- [x] Definir nome, escopo e stack
- [x] Criar repositório e documentação inicial
- [x] Configurar backend FastAPI (estrutura, linters, testes)
- [x] Configurar frontend React + Vite + TypeScript
- [x] Docker Compose
- [x] CI com GitHub Actions (lint + testes)

### Fase 1 – Coleta de dados (semanas 2–3)
- [ ] Coletor de indicadores macro (Selic, CDI, IPCA) – BCB SGS
- [ ] Coletor de ações, FIIs e ETFs – brapi / yfinance
- [ ] Coletor de Tesouro Direto
- [ ] Coletor de criptomoedas – CoinGecko
- [ ] Cache e persistência; atualização automática ao iniciar

### Fase 2 – Motor de análise (semanas 4–5)
- [ ] Cálculo de métricas: retorno, volatilidade, drawdown, liquidez
- [ ] Classificação de risco (RN04)
- [ ] Score de curto e longo prazo (RN05) e filtros (RN06)
- [ ] Testes unitários do motor

### Fase 3 – Perfil e carteira (semana 6)
- [ ] Questionário de perfil do investidor (RN02)
- [ ] Regra da reserva de emergência (RN03)
- [ ] Geração de carteira diversificada (RN07)
- [ ] Explicações em linguagem simples para cada sugestão

### Fase 4 – Frontend (semanas 7–8)
- [ ] Onboarding + questionário
- [ ] Dashboard com rankings por classe
- [ ] Página de detalhes do ativo com gráficos
- [ ] Simulador de juros compostos e glossário

### Fase 5 – Polimento e publicação (semana 9+)
- [ ] Deploy (ex.: Render/Railway para o backend, Vercel para o frontend)
- [ ] README com screenshots e GIF de demonstração
- [ ] Login de usuário e watchlist (opcional)

## Convenções do repositório
- **Branches:** `main` (estável), `feat/<nome>`, `fix/<nome>`
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/pt-br/) — `feat:`, `fix:`, `docs:`, `test:`, `chore:`
- **Issues:** uma issue por item das fases acima
- **Pull requests:** sempre com CI passando antes do merge
