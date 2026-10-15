# 📈 InvestStart

> O ponto de partida para quem nunca investiu.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-TypeScript-61DAFB?logo=react&logoColor=black)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-green)

O **InvestStart** é uma aplicação web que, a cada execução, coleta dados atualizados do mercado e sugere
oportunidades de investimento de forma **educativa**, considerando potencial de crescimento no curto e
longo prazo, nível de risco e o perfil do investidor iniciante.

> ⚠️ **Aviso:** o InvestStart é um projeto educacional/Pessoal e **não constitui recomendação de investimento**.
> Rentabilidade passada não garante rentabilidade futura. Consulte um profissional certificado antes de investir.

## 🚦 Status

| Fase | Situação |
|---|---|
| 0 – Fundação | 🟡 Em andamento: backend pronto; faltam frontend e CI |
| 1 – Coleta de dados | ⚪ Não iniciada |
| 2 – Motor de análise | ⚪ Não iniciada |
| 3 – Perfil e carteira | ⚪ Não iniciada |
| 4 – Frontend | ⚪ Não iniciada |
| 5 – Publicação | ⚪ Não iniciada |

Detalhes em [docs/PLANO.md](docs/PLANO.md).

## 🎯 Público-alvo

Investidores iniciantes que não sabem por onde começar.

## 🧩 Mercados analisados (MVP)

| Classe | Exemplos |
|---|---|
| Ações B3 | PETR4, VALE3, ITUB4 |
| Fundos Imobiliários (FIIs) | HGLG11, MXRF11 |
| Tesouro Direto / Renda Fixa | Tesouro Selic, IPCA+, Prefixado, CDB |
| ETFs | BOVA11, IVVB11 |
| Criptomoedas | BTC, ETH, SOL |

## 🛠️ Stack

- **Backend:** Python 3.12 + FastAPI
- **Frontend:** React + TypeScript (Vite)
- **Banco de dados:** SQLite (MVP) → PostgreSQL
- **Fontes de dados:** brapi.dev, API do Banco Central (SGS), Tesouro Transparente, CoinGecko, yfinance

## ▶️ Como rodar

Pré-requisito: Python 3.12.

```powershell
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
Copy-Item .env.example .env
uvicorn app.main:app --reload
```

A API sobe em http://localhost:8000 e a documentação fica em http://localhost:8000/docs.
Mais detalhes em [backend/README.md](backend/README.md).

## 🗂️ Estrutura

```
InvestStart/
├── backend/    # API FastAPI: coleta, análise e carteira
├── frontend/   # React + TypeScript (em breve)
└── docs/       # requisitos, regras, plano e decisões
```

## 📚 Documentação

- [Requisitos](docs/REQUISITOS.md)
- [Regras de negócio](docs/REGRAS.md)
- [Plano de execução](docs/PLANO.md)
- [Decisões técnicas](docs/DECISOES.md)
- [Changelog](CHANGELOG.md)

## 👤 Autor

**Pedro Braga de Lima** · [GitHub](https://github.com/Blima-P) · [LinkedIn](https://www.linkedin.com/in/pedro-braga-de-lima-633717303/) · [Portfólio](https://blima-p.github.io/Portfolio/)

## 📄 Licença

[MIT](LICENSE)
