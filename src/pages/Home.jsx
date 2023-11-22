import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Home = () => {



  return (
    <div className='home'>
        <button>
            <Link to='/linecoding'> Line Coding</Link>

        </button>
        <button>
           <Link to='/delta'>Delta Modulation</Link>
        </button>
    </div>
  )
}

export default Home