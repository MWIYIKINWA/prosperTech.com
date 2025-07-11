import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Contact from './Pages/Contact.jsx'
import Error from './Pages/Error.jsx'

const router = createBrowserRouter(
  [

    {
      path:'/',
      element:<App />,
      errorElement:<Error/>,
    },

    {
      path:'/contact',
      element:<Contact />,
    },


  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
