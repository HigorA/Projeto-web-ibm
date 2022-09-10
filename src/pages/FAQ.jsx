import PerguntaResposta from "../components/PerguntaResposta";
import { SectionFAQ } from "../style/styled";

export default function FAQ() {

    const teste = [{'tipo':'Q. ','pergunta':'Como faço o cadastro na plataforma?','tipoR':'R. ','resposta':'Para acessar a plataforma basta fazer o cadastro indicado na pégina "Cadastro", seja como candidato ou recrutador. '},
                    {'tipo':'Q. ','pergunta':'Como vejo o acompanhamento da inscrição?', 'tipoR':'R. ','resposta':'Após se candidatar a vaga e, se requisitado, fazer os testes necessários, você será direcionado à uma linha de etapas desta.No seu perfil há uma opção "candidaturas" que mostrará o acompanhamento de cada vaga.'},
                    {'tipo':'Q. ','pergunta':'Tenho 16 anos, posso me candidatar?', 'tipoR':'R. ','resposta':'A idade mínima para cadastro e candidatura, segunda as leis trabalhistas, é 16 anos.'},
                    {'tipo':'Q. ','pergunta':'Consigo avaliar a empresa se passar no processo seletivo?', 'tipoR':'R. ','resposta':'Sim. Após passar por todas as etapas do processo de admissão e ser aprovado(a) para a vaga, o candidato poderá deixar um feedback sobre como foi o processo de recrutamento da empresa na qual está trabalhando.'},
                    {'tipo':'Q. ','pergunta':'Fui aprovado em um processo seletivo, posso cancelar minha candidatura em outros?','tipoR':'R. ','resposta':'Não. Após enviada a inscrição, não há como desfazer, apenas esperar pela resposta e, caso avance para a próxima etapa, informe o recrutador sobre isso.'},
                    {'tipo':'Q. ','pergunta':'Há um prazo mínimo para a resposta das candidaturas?','tipoR':'R. ','resposta':'Os responsáveis pelas respostas e feedbacks são os recrutadores que foram destinados ao processo de recrutamento, por este motivo não podemos estabelecer um prazo para o tempo de espera da resposta.'}
                ]

    return (
        <SectionFAQ>

            <h1 class="titulo-main">Perguntas Frequentes</h1>
            
            <PerguntaResposta teste={teste}/>
        </SectionFAQ>
    )
}