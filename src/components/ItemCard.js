import {StyleCard, CardPokebola, cardPokemon} from '../styles/styleCards'
import Pokebola from '../images/pokebola.svg'

const ItemCard = ({pokemon, index, handleClick}) => {
    
    return ( 
        <>
            <StyleCard  onClick={()=>handleClick(pokemon,index)}>
                { pokemon.show?
                    <cardPokemon>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.imagen} alt={pokemon.name}/>
                    </cardPokemon>
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
