import './App.css'
import CompanyDetails from './components/Home/CompanyDetail/CompanyDetails'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './components/Search/SearchPage'
import SideBar from './components/Sidebar/SideBar'
import SectionPage from './components/Section/SectionPage'
import { usePanel } from './useContext/PanelProvider'
import Login from './components/Login/Login'
import NavBarPanel from './components/Header/NavBarPanel'
import { useAuth } from './useContext/AuthProvider'
import AddCompany from './components/AddCompany/AddCompany'
import { useEffect } from 'react'

function App() {

  const { isPanel } = usePanel()
  const { user, login } = useAuth()

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (user) {
      login(JSON.parse(user))
    }
  }, [])

  return (
    <div className={`relative h-screen p-2 ${isPanel ? 'gap-3' : 'gap-2'} flex items-stretch`}>
      <aside className="flex-col flex overflow-y-auto">
        <SideBar />
      </aside>
      <main className="rounded-lg bg-zinc-900 flex-1 overflow-y-auto">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/company/:id' element={<CompanyDetails />} />
          <Route path='/search' element={<SearchPage />}>
            <Route path='/search/:search' element={<SearchPage />} />
          </Route>
          <Route path='/section/:country' element={<SectionPage />} />
        </Routes>
      </main>
      {isPanel && (
        <div className="rounded-lg bg-zinc-900 w-2/6 mx-auto overflow-y-auto p-4">
          <NavBarPanel />
          {user ? <AddCompany /> : <Login />}
        </div>
      )}
    </div>
  )
}

export default App
