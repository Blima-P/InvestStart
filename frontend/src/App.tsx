import ApiStatus from './components/ApiStatus.tsx'
import Disclaimer from './components/Disclaimer.tsx'

function App() {
  return (
    <main className="container">
      <header>
        <h1>InvestStart</h1>
        <p className="tagline">O ponto de partida para quem nunca investiu.</p>
      </header>

      <Disclaimer />
      <ApiStatus />
    </main>
  )
}

export default App
