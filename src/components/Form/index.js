import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const roles = [
        'Tank',
        'DPS',
        'Healer',
        'Controller'
    ]

    const [name, setName] = useState('')
    const [clas, setClas] = useState('')
    const [image, setImage] = useState('')
    const [role, setRole] = useState('')
    
    const onSave = (event) => {
        event.preventDefault()
        console.log('Form foi submetido', name, clas, image, role)
    }

    return (
        <section className="form">
            <form onSubmit={onSave} >
                <h2>Fill in the data to create the character card</h2>
                <TextField 
                required={true}
                label="Name" 
                placeholder="Type your name" 
                value={name}
                modify={value => setName(value)}
                />
                <TextField 
                required={true} 
                label="Class" 
                placeholder="Type your class" 
                value={clas}
                modify={value => setClas(value)}
                />
                <TextField 
                label="Image" 
                placeholder="Enter the image address" 
                value={image}
                modify={value => setImage(value)}
                />
                <DropdownList 
                required={true} 
                label="Roles" 
                itens={roles} 
                value={role}
                modify={value => setRole(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )

}

export default Form