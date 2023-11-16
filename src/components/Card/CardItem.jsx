import "./CardItem.css";
import { useStore } from '../../store'

const CardItem = () => {


  const {movies , setMovies} = useStore()

  return (
    
    <div>
    <div className="container">
      <p className="main-title">Movies List</p>
      <div className="card-item">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <div>
              <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}/>
            </div>
            <div className="title">
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default CardItem;
