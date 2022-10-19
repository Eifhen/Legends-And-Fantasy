import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from '../components/footer.component';

export default function LoserPage() {
  return (
    <>
        <main className='h-min-80vh align-vertical flex-column bg-dark text-white'>
            <h1 className='text-yellow text-uppercase m-0'>YOU LOSE</h1>
            <p className=''>Do you want to play again?</p>
            <Link to="/character-selection" className='btn btn-yellow'>Try Again</Link>
        </main>
        <FooterComponent />
    </>
  )
}
