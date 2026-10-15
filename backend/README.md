# InvestStart – Backend

API em FastAPI responsável pela coleta de dados de mercado, motor de análise e sugestão de carteira.

## Estrutura

```
app/
├── api/routes/   # rotas REST
├── analysis/     # score e risco
├── collectors/   # coleta de dados (brapi, BCB, Tesouro, CoinGecko)
├── core/         # configurações
├── db/           # persistência
├── portfolio/    # carteira sugerida
└── main.py       # criação da aplicação
tests/
```

## Rodando localmente

```powershell
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
Copy-Item .env.example .env
uvicorn app.main:app --reload
```

- Health check: http://localhost:8000/api/health
- Documentação (Swagger): http://localhost:8000/docs

## Qualidade

```powershell
ruff check .          # lint
ruff format .         # formatação
pytest                # testes + cobertura (mínimo 70%)
```
