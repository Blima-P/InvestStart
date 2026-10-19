import { useEffect, useState } from 'react'
import { fetchHealth, type Health } from '../api/health.ts'

type State = { kind: 'loading' } | { kind: 'online'; health: Health } | { kind: 'offline' }

function ApiStatus() {
  const [state, setState] = useState<State>({ kind: 'loading' })

  useEffect(() => {
    // Cancela a requisição se o componente sair da tela antes da resposta
    const controller = new AbortController()

    fetchHealth(controller.signal)
      .then((health) => setState({ kind: 'online', health }))
      .catch(() => {
        if (!controller.signal.aborted) setState({ kind: 'offline' })
      })

    return () => controller.abort()
  }, [])

  if (state.kind === 'loading') {
    return <p className="status">Verificando a API...</p>
  }

  if (state.kind === 'offline') {
    return <p className="status status--offline">API fora do ar. Tente novamente em instantes.</p>
  }

  const checkedAt = new Date(state.health.timestamp).toLocaleString('pt-BR')

  return (
    <p className="status status--online">
      API online · versão {state.health.version} · verificada em {checkedAt}
    </p>
  )
}

export default ApiStatus
