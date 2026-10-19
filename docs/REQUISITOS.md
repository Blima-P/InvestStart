# Requisitos

## Requisitos funcionais (RF)

| ID | Requisito | Prioridade |
|---|---|---|
| RF01 | Ao iniciar, o sistema deve atualizar automaticamente os dados de mercado (cotações, indicadores, taxas). | Alta |
| RF02 | O usuário deve responder um questionário de perfil (conservador, moderado, arrojado). | Alta |
| RF03 | O sistema deve informar o valor disponível para investir e o horizonte (curto, médio, longo prazo). | Alta |
| RF04 | O sistema deve calcular um *score* para cada ativo combinando retorno, risco e fundamentos. | Alta |
| RF05 | O sistema deve exibir um ranking dos melhores ativos por classe (Ações, FIIs, Renda Fixa, ETFs, Cripto). | Alta |
| RF06 | O sistema deve sugerir uma carteira diversificada de acordo com o perfil do usuário. | Alta |
| RF07 | Cada sugestão deve ter uma explicação em linguagem simples ("por que este ativo?"). | Alta |
| RF08 | O sistema deve exibir gráficos de histórico de preço e rentabilidade. | Média |
| RF09 | O sistema deve ter um glossário de termos financeiros (P/L, Dividend Yield, Selic, volatilidade...). | Média |
| RF10 | O sistema deve permitir simular rendimentos futuros (juros compostos) de uma carteira. | Média |
| RF11 | O sistema deve comparar investimentos com indicadores de referência (CDI, IPCA, Ibovespa, Poupança). | Média |
| RF12 | O usuário pode favoritar ativos e acompanhar uma watchlist. | Baixa |
| RF13 | Cadastro/login de usuários para salvar perfil e carteiras. | Baixa |

## Requisitos não funcionais (RNF)

| ID | Requisito |
|---|---|
| RNF01 | A atualização de dados deve concluir em até 60 s; dados devem ser armazenados em cache para evitar chamadas repetidas. |
| RNF02 | O sistema deve continuar funcionando com o último dado salvo caso uma fonte externa esteja fora do ar. |
| RNF03 | Toda informação exibida deve mostrar a data/hora da última atualização e a fonte. |
| RNF04 | Interface responsiva (desktop e mobile) e em português. |
| RNF05 | Chaves de API devem ficar em variáveis de ambiente (`.env`), nunca no código. |
| RNF06 | Cobertura de testes mínima de 70% no backend (motor de análise). |
| RNF07 | API documentada automaticamente (OpenAPI/Swagger do FastAPI). |
| RNF08 | Respeitar limites de requisição e termos de uso das APIs utilizadas (sem *scraping* não autorizado). |
| RNF09 | Código padronizado com linters (Ruff no Python, oxlint/Prettier no React). |
| RNF10 | Projeto executável localmente com um comando (Docker Compose). |

## Fontes de dados previstas

| Dado | Fonte | Observação |
|---|---|---|
| Ações, FIIs, ETFs da B3 | [brapi.dev](https://brapi.dev) | Plano gratuito com token |
| Histórico de preços (fallback) | yfinance | Tickers com sufixo `.SA` |
| Selic, CDI, IPCA | [API SGS do Banco Central](https://dadosabertos.bcb.gov.br) | Gratuita e oficial |
| Tesouro Direto | [Tesouro Transparente](https://www.tesourotransparente.gov.br) | CSV de taxas e preços |
| Criptomoedas | [CoinGecko API](https://www.coingecko.com/en/api) | Plano gratuito |
