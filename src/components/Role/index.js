import Character from '../Character'
import './Role.css'

const Role = (props) => {
    const css = { backgroundColor: props.secundaryColor }

    return (
        (props.characters.length > 0) ? < section className='role ' style={css}>
            <h3 style={{ borderColor: props.primaryColor }} >{props.nome}</h3>
            <div className='characters'>
            {props.characters.map(character => <Character 
            backgroundColor={props.primaryColor }
            key={character.name}
            name={character.name} 
            clas={character.clas} 
            image={character.image}/> )}
            </div>
        </section >
        : ''
    )
}

export default Role