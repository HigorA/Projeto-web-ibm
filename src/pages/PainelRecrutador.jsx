import { NavLink } from "react-router-dom";
import MenuRecrutador from "../components/MenuRecrutador";
import Vaga from "../components/Vaga";
import { Card } from "../style/styled";

export default function PainelRecrutador() {

    const vagas = [{'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'},
    {'titulo':'Estágio', 'empresa':'FIAP', 'local':'Paulista'}]

    return (
        <>
            <MenuRecrutador/>
            <Card>
                <h2>Venha ver novas Vagas!</h2>
                <Vaga vagas={vagas}/>
            </Card>
            <Card>
                <h2>Quer dar uma olhada nas suas vagas publicadas</h2>
                <p className="previa">Aqui terá um prévia das vagas cadastradas.</p>
                <NavLink to='/Vagas'>Clique aqui para ver as suas vagas publicadas!</NavLink>
            </Card>
        </>
    )
}