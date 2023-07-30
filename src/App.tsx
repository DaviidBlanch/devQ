import './App.css'
import Home from './components/Home'
import SideBar from './components/SideBar'

function App() {
  return (
    <div>
      <SideBar />
      <main className="p-2 pr-3 ml-[85px] sm:ml-[85px] mr-12">
        <div className="fixed p-4 pt-0 w-[82%] lg:w-[92%] md:w-[90%] sm:w-[85%] border-2 border-[#121212] bg-[#121212] rounded-lg bg-gradient-to-b from-[#18607071] from-5% via-[#121212] via-25%">
          <Home />
        </div>
      </main>

    </div>

  )
}

export default App
