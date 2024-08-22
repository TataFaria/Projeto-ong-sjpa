import './App.css'
import Navbar from './Components/Sections/NavBar'
import Adote from './Components/Sections/Adote'
import Apadrinhe from './Components/Sections/Apadrinhe'
import SejaVoluntario from './Components/Sections/SejaVoluntario'

function App() {
  return (
   <div className='App'>
      <Navbar/>
      <Adote/>
      <Apadrinhe/>
      <SejaVoluntario/>
   </div>
      
  )
}

export default App
