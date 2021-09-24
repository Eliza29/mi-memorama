import {StyleCard, CardPokebola, CardPokemon} from '../styles/styleCards'
import Pokebola from '../images/pokebola.svg'

const ItemCard = ({pokemon, index, handleClick}) => {
    
    return ( 
        <>
            <StyleCard  onClick={()=>handleClick(pokemon,index)}>
                { pokemon.show?
                    <CardPokemon>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.imagen} alt={pokemon.name}/>
                    </CardPokemon>
                    :
                    <CardPokebola>
                        <img src={Pokebola} alt={Pokebola}/>
                    </CardPokebola>
                }                           
            </StyleCard>
            
        </>

    );
}
 
export default ItemCard;
