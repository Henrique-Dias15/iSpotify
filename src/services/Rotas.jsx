import ReactDOM from 'react-dom/client'
import PáginaLogIn from '../components/PáginaLogIn'
import PaginaCadastro from '../components/PaginaCadastro'
import Desktop2 from '../components/Desktop2'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([

    {
        path:"/",
        element: <PáginaLogIn />
    },
    {
        path:"PaginaCadastro",
        element: <PaginaCadastro />
    },
    {
        path:"Desktop2",
        element: <Desktop2/>
    }
]);




export default router