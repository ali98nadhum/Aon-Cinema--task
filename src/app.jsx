import './app.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FilmDetails from './components/Card/FilmDetails'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { useStore } from './store'



 const App = () => {

  const {movies , setMovies} = useStore()
  const [pageCount , setPageCount] = useState(0)


// Get all movies
  useEffect(() =>{
    const fetchMovies = async()=>{
      try{
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=eddc2f2d755927cb37c3d664acd908e0&language=en")
        const data = await response.json();
        setMovies(data.results);
        // console.log(movies);
        setPageCount(data.total_pages)
        // console.log(pageCount);
      }catch(error){
        console.log(error);
      }
    }

    fetchMovies()
  } , []);

  const getPagew = async (page) => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eddc2f2d755927cb37c3d664acd908e0&language=en&page=${page}`);
      const data = await res.json();
      setPageCount(data.total_pages);
      console.log(pageCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    getPagew(10)
  }, [])

  
  
  return (
    <div>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage getPagew={getPagew} pageCount={pageCount} /> } ></Route>
        <Route path='/movie/:id' element={ <FilmDetails/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App