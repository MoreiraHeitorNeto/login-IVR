
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <div>
            <CampoTexto placeholder="Digite seu username ou email" label="Username or email address" />
            <CampoTexto placeholder="Digite a sua senha" label="Password" />
            <Botao />
        </div>
    )
}

export default Formulario