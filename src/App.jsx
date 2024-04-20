import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Mybtn from './components/Mybtn'
import MyProfile from './components/MyProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ifTrue,setTrue] = useState(false)

  const user = {
    firstName: "Thanaphat",
    lastName: "Ketsani",
    age: "20",
  }

  const products = [
    {id: 1,title: 'Garlic'},
    {id: 2,title: 'Apple'},
    {id: 3,title: 'Orange'}
  ]

  function addCount(){
    setCount(count + 1);
  }

  function delCount(){
    setCount(count - 1);
  }

  return (
    <>
    <div className='App'>
      <h1 style={{ color: 'blue', border: '1px solid black' }}>Welcome To My Application</h1>
      <p>{count}</p>

      {/* data ที่เห็นข้างล่างคือ การเสร้างข้ตัวแปรแบบ props ที่ชื่อว่า data แม่งที่ง่ายกว่า vue js สัสๆเลย */}
      <MyProfile data={user} ></MyProfile>

      {/*Ternary Operator*/}
      <p>true? {ifTrue ? "Yes it True." : "No it false."}</p>
      <Mybtn></Mybtn>
      <h2>Name List</h2>
      <ul>
        {products.map(item => (
          <li key="item.id" >{item.title}</li>
        ))}
      </ul>
      <br />
      <button onClick={addCount}>add count</button> <button onClick={delCount}>del count</button>
    </div>
    </> // react fragments
  )
}

export default App
