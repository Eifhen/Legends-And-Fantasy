
import { useContext, useEffect } from 'react'
import { CharacterList } from '../components/character.component';
import FooterComponent from '../components/footer.component';
import { CharacterContext } from '../context/character.context';
import { Link } from 'react-router-dom'; 

export default function CharacterSelectionPage() {

  const context = useContext(CharacterContext);
  const selected = context.character;

  useEffect(()=>{
    context.ResetSelection();
  }, [])

  return (
    <>
      <main className='bg-dark h-min-80vh text-center p-2'>
          <Link to="/home" className='author'>
            Gabriel <br /> 
            Jiménez
          </Link>
          <h1 className="title">Select a Character</h1>
          <div className='d-flex justify-space-around col-10 p-2 mx-auto '>
              <CharacterList data={ context.characters } event={ context.SelectCharacter } />
          </div>
          {
            selected &&
            <Link to="/battle" className="btn btn-yellow col-2 mx-auto mt-1 mb-1">Continue</Link>
          }
      </main>
      <FooterComponent />
    </>
  )
}
