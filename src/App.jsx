import { Routes, Route } from 'react-router-dom'

import { Home, Search, Explore, Trending, Personalize, Artist, Album, Song, Login, SignUp } from './pages'
import { MainLayout, FullScreenLayout } from './layouts'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/song" element={<Song/>} />
          <Route path="/artist" element={<Artist/>} />
          <Route path="/album" element={<Album/>} />
        </Route>
        <Route element={<FullScreenLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/personalize" element={<Personalize />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
