# Decisões técnicas

Registro curto do que foi decidido e por quê. A entrada mais recente fica no topo.

---

### 2026-10-19 – Docker Compose com nginx no frontend
**Decisão:** o frontend roda num container nginx que serve o build e repassa `/api` para o backend. O CI sobe os
containers e testa as duas pontas a cada PR.
**Por quê:** site e API ficam na mesma origem (sem CORS), a imagem final não leva Node, e o Docker fica validado
mesmo sem estar instalado na máquina de desenvolvimento.

### 2026-10-19 – CI no GitHub Actions
**Decisão:** um workflow com dois jobs em paralelo (backend e frontend) que roda em todo PR e em push na `main`.
**Por quê:** substitui o revisor que um projeto individual não tem. Nada entra na `main` com lint, teste ou build quebrado.

### 2026-10-19 – Proxy do Vite para chamar a API em dev
**Decisão:** em desenvolvimento, o Vite repassa `/api` para `localhost:8000`. Em produção, a URL vem de `VITE_API_URL`.
**Por quê:** o frontend chama sempre caminhos relativos, sem URL fixa no código e sem depender de CORS em dev.

### 2026-10-19 – Vitest + Testing Library no frontend
**Decisão:** testes de componentes com Vitest, jsdom e Testing Library, sempre com `fetch` simulado.
**Por quê:** o Vitest usa a mesma configuração do Vite, e a Testing Library testa o que o usuário vê, não detalhes internos.

### 2026-10-19 – oxlint + Prettier no frontend
**Decisão:** manter o oxlint, que já vem no template oficial do Vite, em vez do ESLint. Formatação com Prettier.
**Por quê:** é o padrão atual do Vite, muito mais rápido e cobre as regras de React e TypeScript. O RNF09 foi ajustado.

### 2026-10-15 – Agentes de IA não fazem operações de Git
**Decisão:** commits, pushes, PRs e tags são feitos manualmente pelo autor. O agente só sugere os comandos.
**Por quê:** controle total do histórico e da autoria. As regras ficam no [AGENTS.md](../AGENTS.md).

### 2026-10-15 – Configuração via `.env` com pydantic-settings
**Decisão:** toda configuração e todo segredo vêm de variáveis de ambiente, lidas pelo `pydantic-settings`.
**Por quê:** os tokens ficam fora do código (RNF05) e o Pydantic valida os tipos ao iniciar.

### 2026-10-15 – Ruff como linter e formatador
**Decisão:** usar só o Ruff, sem Black, isort ou Flake8.
**Por quê:** uma ferramenta só, muito rápida, e o formatador é compatível com o Black.

### 2026-10-15 – Cobertura mínima de 70% no pytest
**Decisão:** `fail_under = 70` no `pyproject.toml`.
**Por quê:** atende o RNF06 e quebra os testes se a cobertura cair, em vez de depender de conferência manual.

### 2026-10-14 – Stack: FastAPI + React/Vite + SQLite
**Decisão:** backend em Python 3.12 com FastAPI, frontend em React + TypeScript (Vite), banco SQLite no MVP.
**Por quê:** Python tem o melhor ecossistema para dados financeiros. O FastAPI gera a documentação da API sozinho.
O SQLite não precisa de servidor e dá para migrar para PostgreSQL depois.
