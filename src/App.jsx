import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function App() {

  const url = 'https://dummyjson.com/products?limit=100'

  const [data, setData] = useState([])

  const handFetch = async () => {
    const req = await fetch(url)
    const res = await req.json()
    setData([...data, res])
  }



  useEffect(() => {
    handFetch()
  }, [])


  return (
    <>
      hello
      {
        data.length > 0 && console.log(data)
      }
    </>
  )
}

export default App
