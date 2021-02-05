import React from 'react'
import Info from '../../data/personal/Info'

export default _ => {
    const info = Info()
    return (
        <div>
            <h4>Olá!</h4>
            <p>
                Meu nome é { info.nome } e sou { info.funcao }! <br/>
                Sou de { info.cidadeNascimento } - { info.estadoNascimento }, 
                atualmente morando em { info.cidade } - { info.estado }. <br/>
                A seguir contarei um pouco sobre mim e meus projetos.
            </p>
        </div>
    )
}