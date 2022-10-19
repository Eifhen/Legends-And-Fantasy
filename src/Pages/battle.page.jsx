import { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterComponent from '../components/footer.component';
import { CharacterComponent } from '../components/character.component';
import { CharacterContext } from '../context/character.context';

export default function BattlePage() {
    const context = useContext(CharacterContext);
    const userCharacter = context.character;
    const enemyCharacter = context.enemy;
    const deadEnemys = context.enemys;
    const ALL_ENEMYS_ARE_DEAD = CheckIfAllEnemysAreDead();
    const USER_HEALTH_BAR = Math.round((userCharacter.health * 100) / userCharacter.max_health);
    const ENEMY_HEALTH_BAR = Math.round((enemyCharacter.health * 100) / enemyCharacter.max_health);

    const [start, setStart] = useState(false);
    const navigate = useNavigate();
    const display_vs = start ? 'd-none' : '';
    const button = useRef(null)

    function Fight(event){
        
        setStart(start => start = true);
        const user = ReceivedDamage();   // dmg recibido por el usuario - retorna hp restante
        const enemy = InflictedDamage(); // dmg infligido al enemigo - retorna hp restante
        if(user === 0){
            event.target.disabled = true; // desactivamos el botón
            setTimeout(()=>{
                navigate('/loser', {replace:true});
            }, 1000)
        } else if(enemy === 0){
            event.target.disabled = true; // desactivamos el botón
            setTimeout(()=>{
                context.setNewEnemy(enemyCharacter.id);
                event.target.disabled = false;
            }, 1000)
        }
    }   
    
    function ReceivedDamage(){
        // daño recibido por parte del enemigo
        const defense = userCharacter.defense;
        const enemyAttack = enemyCharacter.attack;
        const damage = (enemyAttack * (100 - defense) / 100);
        const health = userCharacter.health - damage ;
        const remaining_health = health > 0 ? health : 0;

        context.userDamageReceived(remaining_health);

        return remaining_health;
    }

    function InflictedDamage(){
        // daño inflijido al enemigo
        const defense = enemyCharacter.defense;
        const userAttack = userCharacter.attack;
        const damage = (userAttack * (100 - defense) / 100);
        const health = enemyCharacter.health - damage ;
        const remaining_health = health > 0 ? health : 0;
        
        context.enemyInflictedDamage(remaining_health);

        return remaining_health;
    }

    function CheckIfAllEnemysAreDead(){
        const dead = deadEnemys.filter(ene=> ene.alive === true);
        return dead.length === 0 ? true : false;
    }
   

    useEffect(()=> {
        if(userCharacter === ''){
            // Si no hay un personaje seleccionado, retornará a la pantalla de selección
            navigate('/character-selection', {replace:true});
        }
        
        if(ALL_ENEMYS_ARE_DEAD && userCharacter.health !== 0){
            button.current.disabled = true;
            setTimeout(()=>{
                navigate('/winner', {replace:true});
            },500)
        }
      ;

    }, [enemyCharacter])

    return (
        <>
            <main className="h-min-80vh bg-dark p-2">
                <div className='col-8 mx-auto p-2 d-flex align-items-center justify-space-around'>
                    <CharacterComponent data = { userCharacter } healthBar={ USER_HEALTH_BAR } />
                    <strong className={`vs ${display_vs}`}>VS</strong>
                    <CharacterComponent data = { enemyCharacter } healthBar={ ENEMY_HEALTH_BAR } />
                </div>
                <button ref={ button } className="btn btn_fight mx-auto mt-2 mb-2" onClick={ Fight }>Fight</button>
            </main>
            <FooterComponent />
        </>
    )
}
