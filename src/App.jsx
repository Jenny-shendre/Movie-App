import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';


// ccae3a75

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=ccae3a75'

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data);
}

const App = () => {

    useEffect(()=>{
          searchMovies('spiderman'); // Replace 'avengers' with your desired movie title
    },[]);
    return (
           <div className ="app">
            <h1>MovieLand</h1>
            <div className = "search" >
                <input placeholder='Search for movies'/>
            </div>
           </div>
    );
}

export default App;
