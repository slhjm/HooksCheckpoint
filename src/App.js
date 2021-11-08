import React, {useState} from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import MyNav from './components/MyNav';
import './App.css'
function App() {
  
  const [movies,setMovies ] = useState([
    {
      title: "Dont Breath 2",
      description: "Blind veteran Norman Nordstrom has been hiding out for a years in cabin. He lives with a young girl and has recreated the family stolen from him by a drunken driver. Their quiet life together is soon shattered when a group of  criminals kidnaps her",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNjU5MTU2NjEtNmE5OC00MzY1LWFhM2YtOGEyYmYwZDBkOTczXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      rate: 5,

    },
    {
      title: "Dune" ,
      description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people" ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" ,
      rate: 5 ,
    },
    {
      title: "No Time To Die" ,
      description: "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help." ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg" ,
      rate: 5 ,
    },
    {
      title: "Suicide squad" ,
      description: "he government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons," ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg" ,
      rate: 5 ,
    },
    {
      title: "Dirty Grandpa" ,
      description: "After his wife's demise, Dick tricks his grandson, Jason, to drive him to Florida. Unaware of Dick's intentions, Jason finds himself in a series of misadventures." ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMzk0NzkyNDk2M15BMl5BanBnXkFtZTgwNDczOTU3NzE@._V1_FMjpg_UX1000_.jpg" ,
      rate: 5 ,
    },
    {
      title: "Batman vs SuperMan" ,
      description: "Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all." ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" ,
      rate: 5 ,
    },
    {
      title: "Avengers Endgame" ,
      description: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance." ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" ,
      rate: 5 ,
    },
    {
      title: "Fast And Furious 9" ,
      description: "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves mos" ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg" ,
      rate: 5 ,
    },
    {
      title: "Taxi 5" ,
      description: "In the city of Marseille, a police officer chases a group of Italian robbers who drive fast sports cars and follow the lead of a legendary white taxi." ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZTVhMTcyMmItOTBiNC00MGZhLThkYmQtOGFhNjAyNmYzYTQ1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" ,
      rate: 5 ,
    },
    {
      title: "Iron Man 3" ,
      description: "Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin." ,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg" ,
      rate: 5 ,
    },
   
  ]);
  const [searchRate, setSearchRate] = useState(0);
  const [searchTitle, setSearchTitle] = useState("");
  const getSearchRate = (input) => {
    setSearchRate(input);
  }
  const getSearchTitle = (input) => {
		setSearchTitle(input);
	};
  const getNewMovie = (newMovie) => {
    setMovies([...movies,newMovie])
  }
  
  return (
<div className="App">
  <MyNav
  getSearchRate = {getSearchRate} 
  getSearchTitle={getSearchTitle}/>
  <div className="addMovieBtn" >
    <AddMovie getNewMovie = {getNewMovie} />
  </div>
  < MovieList 
  movies={movies} 
  searchRate = {searchRate} 
  searchTitle = {searchTitle} />

</div>
    
  );
}

export default App;
