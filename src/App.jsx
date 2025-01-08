import {Outlet} from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'

function App() {
    return (
    <div className="App">
      <NavBar />
      <h2>Movies Library</h2>
      {/* Outlet retora a saida de cara path */}
      <Outlet/>
    </div>
  )
}

export default App
