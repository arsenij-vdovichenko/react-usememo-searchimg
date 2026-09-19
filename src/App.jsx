import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar/Searchbar'

function App() {
const [query, setQuery] = useState("")


const handleSearch = (text)=>{
  setQuery(text)
}

console.log(query);

  return (
    <>
      <Searchbar onSearch={handleSearch}/>
    </>
  )
}

export default App
