import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [watches, setWatches] =useState([])

  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/im-sanny/demo-api/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watches =[
  //   {id:1, name:'apple', price: 200},
  //   {id:2, name:'sam', price: 200},
  //   {id:3, name:'mi', price: 200},
  // ]


  return (
    <>
      <h1>ES6 Module Overview</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
