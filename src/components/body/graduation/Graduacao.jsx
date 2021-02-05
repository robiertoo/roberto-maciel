import React from 'react'
import Fatec from '../../../data/graduation/Fatec'
import Etec from '../../../data/graduation/Etec'

export default _ => {
    const fatec = Fatec()
    const etec = Etec()
    return(
        <div>
            <h3>Graduação</h3>
            <p>
                Minhas história com a programação iniciou no longínquo ano de { etec.anoInicio }. <br/>
                <strike>Naquela época era tudo feito de pedra e madeira...</strike><br/>
                Ingressei no curso de { etec.curso } na { etec.escola } com o intuito de simplesmente aprender sobre Suporte Técnico e afins. <br/>
                Até que em um belo dia, lembro de ter ouvido sobre e perguntei pra um amigo: <br/>
                <q>Ow, o que é <strong>Programação</strong> e o que um <strong>programador</strong> faz?</q><br/>
                E meu amigo, como se estivesse preparado há seculos para dar aquela resposta, respondeu: <br/>
                <q>Ahh, ele faz <strong>tudo</strong>!</q> <br/>
                Desgraçado! No começo fiquei puto, mas depois de certo tempo consegui entender o motivo dele ter dado a resposta daquele jeito. <br/>
                Nunca fui bom com Portugol, ou com as aulas de Lógica de Programação. 
            </p>
        </div>
    )
}