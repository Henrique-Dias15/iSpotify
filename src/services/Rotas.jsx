import ReactDOM from 'react-dom/client'
import PáginaLogIn from '../components/PáginaLogIn'
import PaginaCadastro from '../components/PaginaCadastro'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([

    {
        path:"/",
        element: <PáginaLogIn />
    },
    {
        path:"PaginaCadastro",
        element: <PaginaCadastro />
    }
]);




export default router