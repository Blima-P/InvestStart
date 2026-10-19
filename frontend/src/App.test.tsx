import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App.tsx'

function mockFetch(response: Partial<Response> | Error) {
  const fetchMock =
    response instanceof Error
      ? vi.fn().mockRejectedValue(response)
      : vi.fn().mockResolvedValue(response)
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

describe('App', () => {
  it('mostra o aviso educativo', () => {
    mockFetch(new Error('sem rede'))
    render(<App />)

    expect(screen.getByRole('note')).toHaveTextContent('Não é recomendação de investimento')
  })

  it('mostra a API online com a versão', async () => {
    const fetchMock = mockFetch({
      ok: true,
      json: async () => ({ status: 'ok', version: '0.1.0', timestamp: '2026-10-19T16:00:00Z' }),
    })
    render(<App />)

    expect(await screen.findByText(/API online · versão 0.1.0/)).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledWith('/api/health', expect.any(Object))
  })

  it('avisa quando a API está fora do ar', async () => {
    mockFetch(new Error('sem rede'))
    render(<App />)

    expect(await screen.findByText(/API fora do ar/)).toBeInTheDocument()
  })

  it('trata resposta de erro do servidor como fora do ar', async () => {
    mockFetch({ ok: false, status: 500 })
    render(<App />)

    expect(await screen.findByText(/API fora do ar/)).toBeInTheDocument()
  })
})
