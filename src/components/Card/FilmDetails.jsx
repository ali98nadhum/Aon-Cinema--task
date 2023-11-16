
import "./FilmDetails.css";
import filmimg from "../../assets/coveritem.jpg"

 const FilmDetails = () => {
  return (
    <div className="container1">
        <div className="content">
            <div className="left-side">
            <img src={filmimg} alt="" />
            </div>
            <div className="right-side">
              <h2>NAME : test</h2>
              <h2>YEAR : 2023-11-15</h2>
              <h2>RATING : 6.6</h2>
            </div>
        </div>
        <div className="sec2">
          <h1>STORY :</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ratione animi rem? Impedit obcaecati harum aliquid ex. Non iusto natus culpa corrupti omnis doloribus, est, dignissimos reiciendis quod, aut tenetur.</p>
        </div>
    </div>
  )
}

export default FilmDetails
