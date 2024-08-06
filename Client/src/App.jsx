import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Blog from './Components/Blog/Blog';
import Events from './Components/Events/Events';
import ExplorePage from './Components/ExplorePage/ExplorePage';
import Login from './Components/Login/Login';
import AppWithStyles from './Components/PlaylistsPage/PlaylistsPage';
import Podcasts from './Components/Podcasts/Podcasts';
import SettingsPage from './Components/SettingsPage/SettingsPage';
import SignUp from './Components/SignUp/SignUp';
const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Landing' element={<LandingPage/>}></Route>
     <Route path='/Blog' element={<Blog/>}></Route>
     <Route path='/Explore' element={<ExplorePage/>}></Route>
     <Route path='/Events' element={<Events/>}></Route>
     <Route path='/Playlists' element={<AppWithStyles/>}></Route>
     <Route path='/Podcasts' element={<Podcasts/>}></Route>
     <Route path='/Explore' element={<ExplorePage/>}></Route>
     <Route path='/Settings' element={<SettingsPage/>}></Route>
    </Routes>
</BrowserRouter>
  )
}
<<<<<<< HEAD
=======

>>>>>>> 0b0fd22644848ef845f7a94ef47fe1127c5d0c4b
export default App