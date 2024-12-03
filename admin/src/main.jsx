
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import AgentContextProvider from './context/AgentContext.jsx'
import AppContextProvider from './context/AppContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <AgentContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </AgentContextProvider>
    </AdminContextProvider>

  </BrowserRouter>,
)
