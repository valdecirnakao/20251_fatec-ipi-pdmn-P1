import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-teal/theme.css'
import 'primeflex/primeflex.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
