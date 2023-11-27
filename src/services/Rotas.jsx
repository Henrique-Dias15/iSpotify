import ReactDOM from 'react-dom/client'
import Desktop1 from '../components/Desktop1'
import PáginaLogIn from '../components/PáginaLogIn'
import PaginaCadastro from '../components/PaginaCadastro'
import Desktop2 from '../components/Desktop2'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MusicasCurtidas from '../components/MusicasCurtidas'

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
    },
    {
        path: "/artista/:id",
        element: <Desktop1 />
    },
    {
        path:"/MusicasCurtidas",
        element: <MusicasCurtidas />
    }
]);




export default router