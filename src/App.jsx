import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeView from "./views/Home/HomeView"
import LoginView from "./views/Login/LoginView"
import ChiMarathonView from "./views/ChiMarathon/ChiMarathonView"
import RacesView from "./views/Races/RacesView"
import ChiStoreView from "./views/ChiStore/ChiStoreView"
import VolunteersView from "./views/Volunteers/VolunteersView"
import JoinView from "./views/Join/JoinView"
import NavBar from "./components/NavBar/NavBar"


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomeView/>} />
          <Route path='/join' element={<JoinView/>} />
          <Route path='/login' element={<LoginView/>} />
          <Route path='/chimarathon' element={<ChiMarathonView/>} />
          <Route path='/races' element={<RacesView/>} />
          <Route path='/store' element={<ChiStoreView/>} />
          <Route path='/volunteers' element={<VolunteersView/>} />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
