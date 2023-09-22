import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Role from './components/Role';


function App() {

  const roles = [
    {
      name: 'Tank',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF',
    },
    {
      name: 'DPS',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8',
    },
    {
      name: 'Healer',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9',
    },
    {
      name: 'Controller',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5',
    },
  ]

  const [characters, setCharacters] = useState([])

  const newCharacterSave = (character) => {
        setCharacters([...characters, character])
  }

  return (
    <div className="App">
      <Banner />
      <Form roles={roles.map(role => role.name)} characterSaved={character => newCharacterSave(character)} />
      
      {roles.map(role => <Role  
      key={role.name} 
      nome={role.name} 
      primaryColor={role.primaryColor} 
      secundaryColor={role.secundaryColor}
      characters={characters.filter(character => character.role === role.name)} 
      /> )}
      
      

    </div>
  );
}

export default App;
