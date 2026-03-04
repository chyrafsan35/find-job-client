import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import ThemeProvider from './context/Theme/ThemeProvider.jsx'
import AuthProvider from './context/Auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <div className=' min-h-screen transition-colors duration-300'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
