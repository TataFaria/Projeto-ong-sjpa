import './App.css'
import Navbar from './Components/Sections/NavBar'
import SejaVoluntario from './Components/Sections/SejaVoluntario'
import Apadrinhe from './Components/Sections/Apadrinhe'
import SobreNos from './Components/Sections/SobreNos'
import NossosPets from './Components/Sections/NossosPets'



function App() {
  return (
   <div className='App'>
      <Navbar/>
      <SejaVoluntario/>
      <Apadrinhe/>
      <SobreNos/>
      <NossosPets/>
   </div>
      
  )
}

export default App
