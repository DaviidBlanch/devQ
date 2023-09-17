import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AuthProvider } from './useContext/AuthProvider.tsx'
import { PanelProvider } from './useContext/PanelProvider.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <PanelProvider>
          <App />
        </PanelProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
)
