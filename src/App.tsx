import './App.css'
import CompanyDetails from './components/Home/CompanyDetail/CompanyDetails'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './components/Search/SearchPage'
import SideBar from './components/SideBar'
import SectionPage from './components/Section/SectionPage'

function App() {
  return (
    <main className="relative h-screen p-2 gap-2 flex items-stretch">
      <div className="w-[6%] flex-col hidden lg:flex overflow-y-auto">
        <SideBar />
      </div>
      <div className="rounded-lg bg-zinc-900 flex-1 mx-auto overflow-y-auto">
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
  )
}

export default App
