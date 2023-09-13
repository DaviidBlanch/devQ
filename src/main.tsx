import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SidePanelProvider } from './useContexts.tsx/SidePanelContext.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SidePanelProvider>
        <App />
      </SidePanelProvider>
    </BrowserRouter>
  </QueryClientProvider>
)
