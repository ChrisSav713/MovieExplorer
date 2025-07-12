import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Person from './components/Person'
import Popular from './components/Popular'
import Query from './components/Query'
import Single from './components/Single'
import Trending from './components/Trending'
import Search from './components/Search'
import Nav from './components/Nav'
import Detail from './components/Detail'

function App() {
  return (
    <>
      <Nav></Nav>
      <header className='App-header'>Movies</header>
      <BrowserRouter>
        <Routes>
          <Route path='/' default element={<Home />} />
          <Route path='/person' element={<Person />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/query' element={<Query />} />
          <Route path='/single' element={<Single />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/search' element={<Search />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
