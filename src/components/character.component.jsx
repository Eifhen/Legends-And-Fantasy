
function CharacterComponent(props){
    const health = props.healthBar;
    const danger = health < 20 ? 'danger' : '';
    return (
        <div className={`character character-battle`} >
            <img src={props.data.img} alt="character img" />
            <h1>{props.data.name }</h1>
            <ul className="">
                <li className=""> 
                    <i className="ri-shield-cross-fill icon"></i>
                    Health: { health } %
                    <span className={`health-bar ${danger}`} style={{width:`${health}%`}}></span>
                </li>
                <li> 
                    <i className="ri-sword-fill icon"></i>
                    Attack Power: {props.data.attack}</li>
                <li>
                    <i className="ri-shield-fill icon"></i> 
                    Defense Power: {props.data.defense}
                </li>
            </ul>
        </div>
    )
}

function CharacterInfoComponent(props) {

    const active = props.data.selected ? 'active' : '';

    return (
        <div className={`character character-info pointer  ${active}`} onClick={ ()=> props.event(props.data.id) }>
            <img src={props.data.img} alt="character img" />
            <h1>{props.data.name }</h1>
            <ul>
                <li> Health: {props.data.health}</li>
                <li> Attack Power: {props.data.attack}</li>
                <li> Defense Power: {props.data.defense}</li>
            </ul>
        </div>
    )
}

function CharacterList (props){
    return(
        props.data.map( character => 
            <CharacterInfoComponent 
                key={character.id} 
                data = { character } 
                event = { props.event }
            />
        )
    )
}

export { CharacterComponent, CharacterInfoComponent, CharacterList }