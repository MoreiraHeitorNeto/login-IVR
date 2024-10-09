
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='Formulario'>
            <form>
                <CampoTexto placeholder="Digite seu username ou email" label="Username or email address" />
                <CampoTexto placeholder="Digite a sua senha" label="Password" />
                <Botao />
            </form>
        </section>
    )
}

export default Formulario