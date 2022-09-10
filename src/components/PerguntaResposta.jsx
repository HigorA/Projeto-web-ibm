import {DivPerguntaResposta, Pergunta, Resposta, SpanPergunta, SpanResposta} from './../style/styled'
export default function PerguntaResposta(props) {
    
   
   return (
    
        <>
            {props.teste.map((item)=><DivPerguntaResposta><Pergunta><SpanPergunta>{item.tipo}</SpanPergunta>{item.pergunta}</Pergunta> <Resposta><SpanResposta>{item.tipoR}</SpanResposta>{item.resposta}</Resposta></DivPerguntaResposta>)}
        </> 
        
    )
}