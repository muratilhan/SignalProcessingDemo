import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {



  return (
    <div>
        <button>
            <Link to='/linecoding'> Line Coding</Link>

        </button>
        <button>
           <Link to='/pcm'>PCM</Link>
        </button>
        <button>
           <Link to='/delta'>Delta</Link>
        </button>
    </div>
  )
}

export default Home