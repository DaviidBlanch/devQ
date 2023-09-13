import './App.css'
import CompanyDetails from './components/Home/Companies/CompanyDetails'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './components/Search/SearchPage'
import SideBar from './components/SideBar'
import SectionPage from './components/Section/SectionPage'
import Login from './components/AddPost/Login'
import { useSidePanel } from './useContexts.tsx/SidePanelContext'

function App() {
  const { isSidePanelOpen } = useSidePanel();

  // Posiblemente quitar el ml-[85px] del main en el futuro, para hacer el sidebar en otro sitio.

  return (
    <div>
      <SideBar />
      <main className="p-2 pr-3 ml-[85px] sm:ml-[85px]">
        <div className={`fixed lg:w-${isSidePanelOpen ? '[60%]' : '[92%]'} md:w-${isSidePanelOpen ? '[55%]' : '[90%]'} sm:w-${isSidePanelOpen ? '[50%]' : '[85%]'} bg-[#121212] rounded-lg bg-gradient-to-b from-[#0d363f] from-30% via-[#121212] via-50%`}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/company/:id' element={<CompanyDetails />} />
            <Route path='/search' element={<SearchPage />}>
              <Route path='/search/:search' element={<SearchPage />} />
            </Route>
            <Route path='/section/:country' element={<SectionPage />} />
          </Routes>
        </div>
        {isSidePanelOpen && (
          <div className="lg:w-[34%] md:w-[38%] sm:w-[41%] float-right rounded-lg bg-[#121212] p-2">
            <Login />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
