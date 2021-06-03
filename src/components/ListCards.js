import { useEffect, useState } from "react";
import { randomArray, numberRandom } from "../funciones/randomFunctions";
import {getPokemons} from '../helpers/getPokemons'
import {BoxCards, Button, Form} from '../styles/styleCards'
import ItemCard from './ItemCard'

const ListCards = () => {

    const [pokemons, setPokemons] = useState([])
    const [random, setRandom] = useState(0)
    const [openCards, setOpenCards] = useState([])

    useEffect(()=>{
        getPokemons(random)
        .then((poke) =>{
            const newArrPokes = [...poke, ...poke]
            const copyNewArrPokes = [...newArrPokes]
            const randomPokes = randomArray(copyNewArrPokes)
            setPokemons(randomPokes)
        })

    }, [random])

    useEffect(() => {
        let countCards = openCards.length
        if(countCards === 2){          
            let first= openCards[0]
            let second= openCards[1]

                if(first.name !== second.name){
                    const pokemonSelected = pokemons.map((el, i)=>{
                       return (first.index === i || second.index === i)? {...el, show:false}:{...el}
                    })
                    setTimeout(()=>{
                       setPokemons(pokemonSelected)
                    }, 1000)
                }else{
                    const pokemonSelected = pokemons.map((el, i)=>{
                        return (first.index === i || second.index === i)? {...el, disabled:true}:{...el}
                    })
                    setPokemons(pokemonSelected)
                }
                setOpenCards([])
        }
        // console.log(openCards, 'openCards')
    }, [openCards, pokemons ])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const getRandom = numberRandom(1, 100)
        setRandom(getRandom)
    }

    const handleClick =(pokemon, index) =>{
        
        const pokemonSelected = pokemons.map((el, i)=>{
            return (i === index)?{...el, show:true}:{...el}
        })
        setPokemons(pokemonSelected)
        if(pokemon.disabled === false){
            setOpenCards([...openCards, {...pokemon, index: index}])
        }

    }
    return (  
        <Form onSubmit={handleSubmit}>
            <BoxCards>
                {
                    pokemons.map((pokemon, index)=>(
                        <ItemCard key={index} 
                            pokemon={pokemon} 
                            index={index} 
                            handleClick={handleClick}
                        />
                    ))
                }
            </BoxCards>
           <Button> Resetear </Button>
        </Form>
    );
}
 
export default ListCards;