# Regras de negócio

## RN01 – Caráter educativo
- Toda tela de sugestão deve exibir o aviso: *"Conteúdo educativo. Não é recomendação de investimento."*
- O app não executa ordens de compra/venda e não acessa contas em corretoras.
- Linguagem: usar "oportunidades em destaque" em vez de "compre este ativo".
  (No Brasil, recomendação formal de valores mobiliários é atividade regulada pela CVM – Resolução CVM 20/2021.)

## RN02 – Perfil do investidor
O questionário gera uma pontuação que classifica o usuário em:

| Perfil | Renda Fixa | FIIs | ETFs | Ações | Cripto |
|---|---|---|---|---|---|
| Conservador | 80% | 10% | 10% | 0% | 0% |
| Moderado | 50% | 15% | 15% | 15% | 5% |
| Arrojado | 25% | 15% | 20% | 30% | 10% |

> Percentuais iniciais, ajustáveis em configuração.

## RN03 – Reserva de emergência primeiro
- Se o usuário informar que **não possui reserva de emergência**, a sugestão principal deve ser
  investimento de liquidez diária e baixo risco (Tesouro Selic / CDB liquidez diária ≥ 100% CDI)
  até atingir 6 meses de gastos.

## RN04 – Classificação de risco
Cada ativo recebe um nível de risco de 1 a 5:

| Nível | Descrição | Exemplos |
|---|---|---|
| 1 | Muito baixo | Tesouro Selic, CDB com FGC |
| 2 | Baixo | Tesouro IPCA+, Prefixado |
| 3 | Médio | FIIs, ETFs de índice amplo |
| 4 | Alto | Ações individuais |
| 5 | Muito alto | Criptomoedas, small caps |

Critérios: volatilidade anualizada, *max drawdown*, liquidez média diária e classe do ativo.

## RN05 – Score de investimento
`score = (peso_retorno × retorno) + (peso_fundamentos × fundamentos) − (peso_risco × risco)`

- **Curto prazo (< 1 ano):** prioriza momentum (retorno 3–6 meses) e liquidez.
- **Longo prazo (> 3 anos):** prioriza fundamentos (P/L, P/VP, ROE, Dividend Yield, crescimento de lucro) e consistência.
- Os pesos variam conforme o perfil do usuário.

## RN06 – Filtros mínimos de qualidade
- Ações/FIIs/ETFs: liquidez média diária ≥ R$ 1 milhão.
- FIIs: Dividend Yield entre 6% e 16% a.a. (evitar *yield traps*) e P/VP entre 0,7 e 1,2.
- Cripto: apenas top 20 em capitalização de mercado.
- Renda fixa: comparada sempre contra CDI e inflação (rentabilidade real).

## RN07 – Diversificação
- Nenhum ativo individual pode ultrapassar 20% da carteira sugerida.
- Criptomoedas nunca ultrapassam 10% da carteira, independentemente do perfil.
- Pelo menos 3 classes de ativos na carteira de perfis moderado e arrojado.

## RN08 – Atualização de dados
- Os dados são atualizados a cada execução do app.
- Se os dados em cache tiverem menos de 15 minutos, reutilizar o cache.
- Se uma fonte falhar, usar o último dado válido e sinalizar "dados possivelmente desatualizados".
