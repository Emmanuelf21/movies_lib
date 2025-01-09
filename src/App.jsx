import {Outlet} from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'

function App() {
    return (
    <div className="app-container">
      
      {/* Outlet retora a saida de cada path */}
      <Outlet/>
    </div>
  )
}

export default App
