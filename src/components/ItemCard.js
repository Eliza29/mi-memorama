import {StyleCard, Lele, Lelo} from '../styles/styleCards'
import Pokebola from '../images/pokebola.svg'

const ItemCard = ({pokemon, index, handleClick}) => {
    
    return ( 
        <>
            <StyleCard  onClick={()=>handleClick(pokemon,index)}>
                { pokemon.show?
                    <Lelo>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.imagen} alt={pokemon.name}/>
                    </Lelo>
                    :
                    <Lele>
                        <img src={Pokebola} alt={Pokebola}/>
                    </Lele>
                }                           
            </StyleCard>
            
        </>

    );
}
 
export default ItemCard;
