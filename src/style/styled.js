import styled from "styled-components";

export const Pergunta = styled.p `
    background-color: #e8e8e8;
    height: 58px;
    margin: 0;
    margin-top: 10px;
    border-left: 10px solid #00cda6;
    width: 100%;
`

export const Resposta = styled.p `
    background-color: #e8e8e8;
    margin: 0;
    border-left: 10px solid #8a8989;
    width: 100%;
`

export const SpanPergunta = styled.span `
    font-size: 2rem;
    padding: 2px;
    color: #00cda6;
`

export const SpanResposta = styled.span `
    font-size: 2rem;
    padding: 2px;
    color: #8a8989;
`

export const Head = styled.header `
    display:flex;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    padding: 20px 0px;
    box-shadow: 0 0 4px 0 ;
    border-radius: 5px;
    background: linear-gradient(to right, rgba(47, 239, 216, 1.0), rgba(28, 97, 226, 1.0));
`

export const LoginDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 18vw;
    
    a {
        color: white;
        
    }

    a:hover {
    }
`

export const Nav = styled.nav `
    display: flex;
    width: 30vw;

    justify-content: space-around;
    align-items: center;
    

    ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        
        li {
            width: 4vw;
            text-align: center;
        }

        li a {
            color: white;
            
        }
    }
`

export const Logo = styled.img `
    width: 15vw;
`

export const Inicio = styled.section `
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    

    h1 {
        margin-top: 5vh;
        width: 90vw;
        font-family: 'Bebas Neue', cursive;
    }

    section {
        width: 90vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .container {
        margin-top: 5vh;
        width: 25vw;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 2px 1px 2px grey;
    }

    .imagem-container {
        margin-top: 10px;
        width: 20vw;
        height: 70vh;
        border-radius: 10px;
    }
`   

export const Foot = styled.footer `
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 100vw;
    height: 30vh;
    border-top: 1px solid lightgray;
    margin-top: 10vh;
    background: linear-gradient(to right, rgba(47, 239, 216, 1.0), rgba(28, 97, 226, 1.0));
`

export const SectionVagas = styled.section `
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;

    h2 {
        width: 100%;
        text-align: center;
        padding: 20px;
        font-size: 1.4rem;
    }
`

export const DivVaga = styled.div `
    display: flex;
    width: 30vw;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    background:linear-gradient(to right, rgba(47, 239, 216, 1.0), rgba(28, 97, 226, 1.0));
    padding: 20px;
    border-radius: 10px;
    h3 {
        color: #5293d4;
    }
    
    p {
        font-size: 1rem;
        gap: 15px;
    }
`

export const SectionSobre = styled.section `
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 70vw;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    img {
        width: 20vw;
    }

    h1 {
        margin-top: 20px;
        text-align: center;
        width: 100%;
        color:#707070;
    }
`

export const DivVantagem = styled.div `
    display: flex;
    width: 28vw;
    box-shadow: 5px 5px 30px 5px rgba(55, 54, 54, 0.71);
    border-radius: 10px;
    padding: 10px;
    h3, p {
        font-size: 1rem;
        color: #707070;
    }
`
export const SectionFAQ = styled.section `
    display: flex;
    flex-direction: column;
    width: 80vw;
    gap: 10px;

    h1 {
        text-align: center;
        margin: 20px;
    }
`

export const DivPerguntaResposta = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

`