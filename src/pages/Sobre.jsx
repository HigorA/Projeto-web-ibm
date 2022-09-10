import { DivSobre, DivVantagem, SectionSobre } from "../style/styled";
import candidato from './../img/candidato.png'
import empresa from './../img/empresapng.png'

export default function Sobre() {
    return (
        <SectionSobre>

            <DivSobre>
                <h1>Sobre</h1>
                <p>A plataforma Nextidea surgiu com o propósito de aprimorar a experiência de busca e contratação para empregos, tanto para candidatos quanto recrutadores.</p>
                <p>Assim, surgimos no ano de 2022, como uma forma de solução para o desafio proposto pela IBM, que consistia nesta mesma ideia de aprimoramento na relação de busca por empregos e empregados.</p>
            </DivSobre>



            <h1 class="titulo-main">Vantagens</h1>
        
            <DivVantagem class="vantagens vant">
                <img src={candidato} alt="" class="candidatoEempresa"/>
                <h3 class="titulo-vantagem">Para o Candidato</h3>
                <p class="p-vantagem">Exportação currículo;</p>
                <p class="p-vantagem">Filtros por área e skills;</p>
                <p class="p-vantagem">Linha do tempo para acompanhamento;</p> 
                <p class="p-vantagem">Avaliação do processo seletivo da empresa;</p>
                <p class="p-vantagem">Indicações de oportunidades.</p>
            </DivVantagem>
            <DivVantagem class="vantagens vant">
                <img src={empresa} alt="" class="candidatoEempresa"/>
                <h3 class="titulo-vantagem">Para a Empresa</h3>
                <p class="p-vantagem">Filtragem por skills;</p>
                <p class="p-vantagem">Processos de seleção mais ágeis e rápido.</p>
                <p class="p-vantagem">Alertas profissionais de acordo com a vaga.</p>
                <p class="p-vantagem">Maior visibilidade para empresa através do "Ranking".</p>
            </DivVantagem>
        </SectionSobre>
    )
}