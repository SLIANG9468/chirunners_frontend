import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeView from "./views/Home/HomeView"
import LoginView from "./views/Login/LoginView"
import ChiMarathonView from "./views/ChiMarathon/ChiMarathonView"
import RacesView from "./views/Races/RacesView"
import ChiStoreView from "./views/ChiStore/ChiStoreView"
import VolunteersView from "./views/Volunteers/VolunteersView"
import TeamsView from "./views/TeamsView/TeamsView"
import RegisterRunnerView from "./views/RegisterRunner/RegisterRunnerView"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import TeamMembers from "./views/TeamMembers/TeamMembers"
import AddTeamView from "./views/AddTeam/AddTeamView"
import ProfileView from "./views/Profile/ProfileView"
import TeamView from "./views/Team/TeamView"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomeView/>} />
          <Route path='/join' element={<RegisterRunnerView/>} />
          <Route path='/addteam' element={<AddTeamView/>} />
          <Route path='/myteammates' element={<TeamView/>} />
          <Route path='/profile' element={<ProfileView/>} />
          <Route path='/store' element={<ChiStoreView/>} />
          <Route path='/myteams' element={<TeamsView/>} />
          <Route path='/login' element={<LoginView/>} />
          <Route path='/chimarathon' element={<ChiMarathonView/>} />
          <Route path='/races' element={<RacesView/>} />
          <Route path='/volunteers' element={<VolunteersView/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>  
    </>
  )
}

export default App
