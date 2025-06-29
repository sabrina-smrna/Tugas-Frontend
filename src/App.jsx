import { useState } from 'react'
import Hello from './components/Hello'
// import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NowPlaying from './pages/NowPlaying'
import CreateMovie from './pages/Create'
import Layout from './Layout/index'
import TopRatedMovie from './pages/TopRated'
import PopularMovie from './pages/Popular'
import Counter from './components/Counter/Counter'
import DetailMovie from './pages/Detail'
import data from './utils/constants/data'
import MoviesContex from './components/context/MoviesContext'

// import './App.css'



function App() {

  const [movies, setMovies] = useState(data);
  const contextValue = {
    movies, setMovies
  }  

  // const [count, setCount] = useState(0)
  return (
  <>

  <MoviesContex.Provider value={contextValue}>

  <Layout>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/movie/create" element={<CreateMovie />} />
      <Route path="/movie/now" element={<NowPlaying />} />
      <Route path="/movie/top" element={<TopRatedMovie />} />
      <Route path="/movie/popular" element={<PopularMovie />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/movie/:id" element={<DetailMovie />} />
    </Routes>
  </Layout>
  </MoviesContex.Provider>

  </>
  )
}

export default App
