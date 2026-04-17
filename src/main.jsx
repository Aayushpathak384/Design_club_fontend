import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force-refresh favicon to avoid stale cached tab icons.
const applyFavicon = () => {
  const faviconHref = `/logo.png?v=${Date.now()}`
  document.querySelectorAll("link[rel*='icon']").forEach((node) => node.remove())

  const icon = document.createElement('link')
  icon.rel = 'icon'
  icon.type = 'image/png'
  icon.href = faviconHref
  document.head.appendChild(icon)

  const shortcut = document.createElement('link')
  shortcut.rel = 'shortcut icon'
  shortcut.type = 'image/png'
  shortcut.href = faviconHref
  document.head.appendChild(shortcut)
}

applyFavicon()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
