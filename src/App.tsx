import './App.css'
import Home from './components/Home'
import Navegation from './components/Navegation'

function App() {
  return (
    <div>
      <Navegation />
      <main className="p-2 pr-3 ml-[85px] sm:ml-[85px]">
        <div className="p-4 border-2 border-[#121212] bg-[#121212] rounded-lg">
          <Home />
        </div>
      </main>
    </div>

  )
}

export default App
