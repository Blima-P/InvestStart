# 📈 InvestStart

> O ponto de partida para quem nunca investiu.

O **InvestStart** é uma aplicação web que, a cada execução, coleta dados atualizados do mercado e sugere
oportunidades de investimento de forma **educativa**, considerando potencial de crescimento no curto e
longo prazo, nível de risco e o perfil do investidor iniciante.

> ⚠️ **Aviso:** o InvestStart é um projeto educacional e **não constitui recomendação de investimento**.
> Rentabilidade passada não garante rentabilidade futura. Consulte um profissional certificado antes de investir.

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

## 📚 Documentação

- [Requisitos](docs/REQUISITOS.md)
- [Regras de negócio](docs/REGRAS.md)
- [Plano de execução](docs/PLANO.md)

## 📄 Licença

[MIT](LICENSE)
