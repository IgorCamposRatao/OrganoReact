import TextField from '../TextField'
import './Form.css'

const Form = () => {
    return (
        <section className="form">
            <form action="">
                <h2>Preencha os dados para criar o card do personagem</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Classe" placeholder="Digite sua classe" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )

}

export default Form