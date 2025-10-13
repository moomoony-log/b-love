import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

createRoot(document.getElementById('main-container')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
