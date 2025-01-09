import {Outlet} from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'

function App() {
    return (
    <div className="App">
      
      {/* Outlet retora a saida de cada path */}
      <Outlet/>
    </div>
  )
}

export default App
