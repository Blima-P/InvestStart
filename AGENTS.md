# Instruções para agentes de IA (Copilot, etc.)

Este arquivo define como assistentes de IA devem trabalhar neste repositório.
Leia-o **antes** de qualquer ação.

## 🚫 Regra principal: o agente NÃO executa operações de Git/GitHub

O dono do repositório faz **todos** os commits, pushes e PRs manualmente.
O agente **não pode** executar comandos que alterem o histórico, as branches ou o repositório remoto:

- `git commit`, `git push`, `git merge`, `git rebase`, `git reset`, `git revert`, `git tag`
- `git checkout -b` / `git switch -c` / `git branch` (criar, trocar ou apagar branches)
- `git add` / `git rm` / `git stash`
- `gh pr create`, `gh pr merge`, `gh issue create` ou qualquer ação que escreva no GitHub

**Permitido** (somente leitura): `git status`, `git log`, `git diff`, `git branch --show-current`, `git remote -v`.

### O que o agente deve fazer no lugar

Ao terminar uma alteração, o agente deve **entregar ao usuário os comandos prontos**, com comentários
explicando cada passo. Exemplo:

```powershell
# 1. Criar a branch da feature
git switch -c feat/nome-da-feature

# 2. Conferir o que mudou
git status
git diff

# 3. Adicionar os arquivos
git add caminho/do/arquivo

# 4. Commit seguindo Conventional Commits
git commit -m "feat(escopo): descrição curta"

# 5. Enviar para o GitHub
git push -u origin feat/nome-da-feature

# 6. Abrir o PR
gh pr create --base main --title "feat(escopo): descrição" --body "Descrição do que foi feito"
```

### Conta do GitHub

Este repositório pertence à conta pessoal **Blima-P** (`https://github.com/Blima-P/InvestStart`).
A máquina também tem a conta de trabalho `pedroblima_caesb` logada no `gh`, e o `gh` é o
*credential helper* do git, então o push sai pela **conta ativa** do `gh`.

Antes de passar comandos de push/PR, o agente deve verificar (somente leitura) e avisar o usuário se
a conta ativa ou o e-mail do repositório estiverem errados:

```powershell
gh auth status                 # conta ativa deve ser Blima-P
git config user.email          # e-mail local do repositório (não o da CAESB)
```

Comandos que o **usuário** roda para ajustar:

```powershell
gh auth switch --user Blima-P            # antes do push/PR
gh auth switch --user pedroblima_caesb   # depois, para voltar à conta de trabalho
```

Junto com os comandos, o agente deve sugerir:
- nome da branch (`feat/<nome>`, `fix/<nome>`, `docs/<nome>`)
- mensagem de commit ([Conventional Commits](https://www.conventionalcommits.org/pt-br/))
- título e descrição do PR

## ✅ O que o agente pode fazer livremente

- Criar e editar arquivos de código e documentação
- Instalar dependências no ambiente virtual local (`backend/.venv`, `node_modules`)
- Rodar linters, formatadores e testes (`ruff check .`, `ruff format .`, `pytest`)
- Subir o servidor localmente para validar e encerrá-lo em seguida

## 📌 Contexto do projeto

- **O que é:** app web educativo que sugere oportunidades de investimento para iniciantes.
- **Documentação:** [README](README.md), [Requisitos](docs/REQUISITOS.md), [Regras](docs/REGRAS.md), [Plano](docs/PLANO.md).
- **Progresso:** acompanhe os checkboxes em [docs/PLANO.md](docs/PLANO.md) e continue pelo próximo item pendente.
  Ao concluir um item, marque-o como `[x]` no plano.
- **Backend:** Python 3.12 + FastAPI em `backend/` (ver [backend/README.md](backend/README.md)).
- **Frontend:** React + TypeScript (Vite) em `frontend/`.
- **Ambiente:** Windows + PowerShell. Docker ainda **não** está instalado na máquina.

## 🧭 Convenções

- Idioma: português (código pode ter nomes em inglês; textos e docs em português).
- Toda tela/rota de sugestão deve respeitar a RN01 (aviso educativo, sem "compre este ativo").
- Segredos sempre no `.env` (nunca no código); manter o `.env.example` atualizado.
- Cobertura mínima de testes do backend: 70%.
