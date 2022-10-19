import { createContext, useState} from 'react';
import { ListOfCharacters} from '../data/character.data';



const CharacterContext = createContext();

function CharacterContextProvider(props){
    const list_of_characters = new ListOfCharacters();
    const chars = list_of_characters.character_data
    const [characters, setCharacters] = useState(chars.heros);
    const [character, setCharacter] = useState('');
    const [enemys, setEnemys] = useState(chars.enemys);
    const [enemy, setEnemy] = useState(getNewEnemy);


    function SelectCharacter(id){
        setCharacters(characters => {
         const char = characters.map(ch => {
            ch.selected = false;
            ch.alive = false;
            return ch;
          });
         
          const finded_character = char.findIndex( ch => ch.id === id);
          char[finded_character].selected = !char[finded_character].selected;
          char[finded_character].alive = !char[finded_character].alive;
          return [...char]
        })

        setCharacter(()=>{
            const find = getSelectedCharacter();
            return find;
        })
    }

    function ResetSelection(){
        const list= new ListOfCharacters();
        setCharacters(list.character_data.heros);
        setCharacter('');
        setEnemys(list.character_data.enemys)
        setEnemy(enemy => {
            const find = list.character_data.enemys.find( enemy => enemy.alive);
            return find;
        })
    }

    function getSelectedCharacter(){
        const find = characters.find( ch => ch.selected === true);
        if(find){
            return find ;
        }
        return false;
    }

    function getNewEnemy(){
        const are_all_dead = enemys.filter(enemy => enemy.alive === true);
        if(are_all_dead.length > 0){
            const find = enemys.find( enemy => enemy.alive);
            return find;
        }
        else{
            // si todos están muertos retornaré el último monstruo en morir
            const last_in_die = enemy;
            return last_in_die;
        }
    }

    function setNewEnemy(deathEnemy_id){

        setEnemys(enemys => {
            const ene = enemys.find(enemy => enemy.id === deathEnemy_id);
            ene.alive = false;
            return [...enemys]; 
        })

        setEnemy(enemy => {
            const new_enemy = getNewEnemy();
            enemy = new_enemy;
            return {...enemy };
        });
    }
    
    function userDamageReceived(remaining_health){
        setCharacter(character => {
            character.health = remaining_health;
           return {...character};
        })
    }

    function enemyInflictedDamage(remaining_health){
        setEnemy(enemy => {
            enemy.health = remaining_health;
            enemy.alive = enemy.health === 0 ? false : true;
            return {...enemy};
        })
    }
        

    const data = { 
        characters,  character, enemys, enemy,
        SelectCharacter, ResetSelection, setNewEnemy,
        userDamageReceived, enemyInflictedDamage, 
    };

    return(
       <CharacterContext.Provider value={ data }>
            {props.children}
       </CharacterContext.Provider> 
    )
}

export { CharacterContextProvider, CharacterContext}