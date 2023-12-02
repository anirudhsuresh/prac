import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [track, setTrack] = useState(1)
  const url = 'https://jsonplaceholder.typicode.com/users/' + track


  async function handleFetch() {
    setTrack(track + 1)
    const res = await fetch(url)
    const data = await res.json()
    setCount([...count, data])
  }

  function handleClick() {
    handleFetch()


  }


  useEffect(() => {
    handleFetch()
  }, [])



  return (
    <>
      <button onClick={() => handleClick()}> Click me man</button>
      {
        count ?

          <ul>
            {
              count.map((a) => (
                <>
                  <li key={a.id}>{a.name}</li>
                  <ul>
                    <li key={a.id}>{a.username}</li>
                  </ul>
                </>
              ))
            }
          </ul>


          : 'No Data'
      }
    </>
  )
}

export default App
