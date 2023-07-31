import './App.css'
import Home from './components/Home'
import SideBar from './components/SideBar'

function App() {
  return (
    <div>
      <SideBar />
      <main className="p-2 pr-3 ml-[85px] sm:ml-[85px] mr-12">
        <div className="fixed w-[82%] lg:w-[92%] md:w-[90%] sm:w-[85%] bg-[#121212] rounded-lg bg-gradient-to-b from-[#0d363f] from-30% via-[#121212] via-50%">
          <Home />
        </div>
      </main>
    </div>

  )
}

export default App
