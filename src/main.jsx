import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Desktop1 from './components/Desktop1.jsx'
import Desktop2 from './components/Desktop2.jsx'
import Desktop3 from './components/Desktop3.jsx'
import Desktop4 from './components/Desktop4.jsx'
import Desktop5 from './components/Desktop5.jsx'
import Desktop6 from './components/Desktop6.jsx'
import Desktop7 from './components/Desktop7.jsx'
import Desktop8 from './components/Desktop8.jsx'
import Desktop9 from './components/Desktop9.jsx'
import Desktop10 from './components/Desktop10.jsx'
import Desktop11 from './components/Desktop11.jsx'



/* import {  createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Desktop1 />
  },
  {
    path:"Desktop2",
    element: <Desktop2 />
  },
  {
    path:"Desktop3",
    element: <Desktop3 />
  },
  {
    path:"Desktop4",
    element: <Desktop4 />,
  },
  {
    path:"Desktop5",
    element: <Desktop5 />
  },
  {
    path:"Desktop6",
    element: <Desktop6 />
  },
  {
    path:"Desktop7",
    element: <Desktop7 />
  },
  {
    path:"Desktop8",
    element: <Desktop8 />
  },
  {
    path:"Desktop9",
    element: <Desktop9 />
  },
  {
    path:"Desktop10",
    element: <Desktop10 />
  },
  {
    path:"Desktop11",
    element: <Desktop11 />
  }


]) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
