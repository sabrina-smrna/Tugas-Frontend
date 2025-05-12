import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateMovie from './pages/Create';
import NowPlaying from './pages/NowPlaying';
// import Hello from './components/Hello'
// import './App.css'


function App() {
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/create' element={<CreateMovie />}></Route>
        <Route path='/movie/now' element={<NowPlaying />}></Route>
      </Routes>
     
      
    </div>
  )
}

export default App
