import './App.css'
import CompanyDetails from './components/Home/Companies/CompanyDetails'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './components/Search/SearchPage'
import SideBar from './components/SideBar'
import SectionPage from './components/Section/SectionPage'

function App() {
  return (
    <div>
      <SideBar />
      <main className="p-2 pr-3 ml-[85px] sm:ml-[85px]">
        <div className="fixed lg:w-[92%] md:w-[90%] sm:w-[85%] bg-[#121212] rounded-lg bg-gradient-to-b from-[#0d363f] from-30% via-[#121212] via-50%">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/company/:id' element={<CompanyDetails />} />
            <Route path='/search' element={<SearchPage />}>
              <Route path='/search/:search' element={<SearchPage />} />
            </Route>
            <Route path='/section/:country' element={<SectionPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
