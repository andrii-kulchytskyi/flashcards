import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import { App } from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
