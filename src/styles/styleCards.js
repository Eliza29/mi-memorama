import styled, {keyframes} from 'styled-components'

const Header = styled.header`
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    text-shadow: 2px 2px #c1c1c1;
`
const BoxCards = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;

    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (min-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

`
const Button = styled.button`
    align-self: center;
    background: linear-gradient(to right, #3a7bd5, #00d2ff);
    border:none;
    border-radius:7px;
    color:white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 900;
    padding: 14px 7px;
    margin: 1rem 0;
    width: 200px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Flip = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`
const Animation = styled.div`
    animation-name: ${Flip};
    animation-duration: 2s;
    animation-fill-mode: both;
`

const CardPokebola = styled(Animation)`
    animation-duration: 3s; 
`
const CardPokemon = styled(Animation)`
    animation-duration: 2s;
`

const StyleCard = styled(Animation)`
    background: #e8f5ff;
    border-radius: 7px;
    cursor:pointer;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    /* width: 200px; */
    animation-duration: 3s; 

    img{
        max-width: 100px;
        height: 140px;
        filter: drop-shadow(0 0 4px #ACACAC);
    }
`

export {StyleCard, BoxCards, Header, Button, Form, CardPokebola, CardPokemon}