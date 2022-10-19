
import {Link}  from 'react-router-dom';

export default function HomePage() {

  return (
    <main className='h-min-100vh bg-dark d-flex flex-column align-vertical '>
        <h1 className="main-title">
            Legends and Fantasy <br />
            By <span>Gabriel Jiménez</span> 
        </h1>
        <Link className="btn btn-lg btn-yellow" to="/character-selection">Start</Link>
    </main>
  )
}
