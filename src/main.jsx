import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import PageContato from './Pages/PageContato.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import PageSobre from './Pages/PageSobre.jsx'
import './style.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <PageSobre /> },
      { path: 'contato', element: <PageContato /> },
      { path: '*', element: <PageNotFound /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)