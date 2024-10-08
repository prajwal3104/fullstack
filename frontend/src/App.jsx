import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Jokes by `Prajwal Kumbar` :/</h1>
      <p> JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={jokes.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
