import Vaga from "../components/Vaga";
import { SectionVagas } from "../style/styled";

export default function Vagas() {

    const vagas = [{'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'}]

    
    return(
        <SectionVagas>
            <h2>Vagas</h2>
            <Vaga vagas={vagas}/>
        </SectionVagas>
    )
}