import PropTypes from "prop-types";

function PokemonCard(  {pokemon} ) {

if(pokemon.imgSrc!==undefined) { // can use another trick without if else butif also is basic
    return <figure> 
    <img src={pokemon.imgSrc} alt={pokemon.name}/>
    <figcaption> {pokemon.name} </figcaption>
   </figure>;
}
 else {
    return <figure>
    <p> ??? </p>
    <figcaption> {pokemon.name} </figcaption>
    </figure>;     
 }
   
}
PokemonCard.propTypes={
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
}).isRequired,
}
  
  export default PokemonCard;

