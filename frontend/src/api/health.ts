export type Health = {
  status: string
  version: string
  timestamp: string
}

// Vazio em dev (usa o proxy do Vite); em produção aponta pro backend publicado
const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function fetchHealth(signal?: AbortSignal): Promise<Health> {
  const response = await fetch(`${API_URL}/api/health`, { signal })
  if (!response.ok) {
    throw new Error(`API respondeu ${response.status}`)
  }
  return response.json() as Promise<Health>
}
