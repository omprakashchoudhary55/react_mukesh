import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SearchBar from './component/SearchBar';
import { SearchResultList } from './component/SearchResultList';



const App = () => {
  
  const[results, setResults] = useState([]);


  return(
    <div className='App'>
    <div className='search-bar-container'>
    <SearchBar setResults={setResults}/>
   <SearchResultList results={results}/>
    </div>

    </div>
  )


}

export default App;