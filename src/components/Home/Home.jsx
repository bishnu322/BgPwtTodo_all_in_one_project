import React, {useState} from 'react'
import App from '../../App'

const Home = () => {
  const [todos, setTodos] = useState([])

  return (
    <div className='bg-slate-500 h-[80vh]'>
        <App />
    </div>
  )
}

export default Home