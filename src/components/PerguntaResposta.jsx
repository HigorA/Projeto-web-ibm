import {Pergunta, Resposta} from './../style/styled'
export default function PerguntaResposta(props) {
    
   
   return (
    
        <section>
            {props.teste.map((item)=><><Pergunta>{item.pergunta}</Pergunta> <Resposta>{item.resposta}</Resposta></>)}
        </section> 
        
    )
}