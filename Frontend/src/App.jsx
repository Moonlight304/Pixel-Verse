import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [gameDetails,setGameDetails] = useState([]);

  useEffect(()=>{
    fetch("https://api.rawg.io/api/games?key=3ed74fd8a97249858285e21f6e5768ea&page_size=5")
      .then(response => response.json())
        .then(( (data)=>{
          console.log(data.results);
          setGameDetails(data.results);
        }))
        .catch(error => console.error(error));
  },[])



  return (
    <>
      <Navbar />
      <Card title={gameDetails[0].name}/>
    </>
  )
}

export default App
