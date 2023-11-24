import { RouterProvider } from 'react-router-dom'
import PáginaLogIn from './components/PáginaLogIn.jsx'
import router from './services/Rotas.jsx'
import "./App.css"


function App() {
  return (
      <div style={{backgroundColor: 'black'}} >
        <RouterProvider router={router} />
      </div>
  )
}

export default App
