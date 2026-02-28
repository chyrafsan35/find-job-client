import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
