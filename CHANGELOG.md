# Changelog

Mudanças relevantes do projeto. Segue o formato do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o versionamento [SemVer](https://semver.org/lang/pt-BR/).

## [Não lançado]

## [0.1.0] - 2026-10-19

Fase 0 – Fundação concluída.

### Adicionado
- Docker Compose para subir backend e frontend com um comando; o CI testa os containers.
- CI no GitHub Actions: lint, formatação, testes e build do backend e do frontend a cada PR e push na `main`.
- Frontend em React + TypeScript (Vite) com o aviso educativo e o status da API.
- Lint com oxlint, formatação com Prettier e testes com Vitest + Testing Library no frontend.
- Backend em FastAPI com configuração via `.env`, rota `/api/health` e documentação Swagger.
- Lint e formatação com Ruff; testes com pytest e cobertura mínima de 70%.
- Documentação inicial: requisitos, regras de negócio, plano de execução e registro de decisões.
- `AGENTS.md` com as regras para assistentes de IA.
- Templates de issue e de pull request.
