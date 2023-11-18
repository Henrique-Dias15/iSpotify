import { RouterProvider } from 'react-router-dom'
import PáginaLogIn from './components/PáginaLogIn.jsx'
import router from './services/Rotas.jsx'

function App() {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
