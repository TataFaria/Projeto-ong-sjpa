import './App.css'
import Navbar from './Components/Sections/NavBar'
import Adote from './Components/Sections/Adote'
import Apadrinhe from './Components/Sections/Apadrinhe'
import SejaVoluntario from './Components/Sections/SejaVoluntario'
import NossosPets from './Components/Sections/NossosPets'

function App() {
  return (
   <div className='App'>
      <Navbar/>
      <Adote/>
      <Apadrinhe/>
      <SejaVoluntario/>
      <NossosPets/>
   </div>
      
  )
}

export default App
