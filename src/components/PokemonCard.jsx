import PropTypes from "prop-types";

function PokemonCard(props) {

if(props.pokemon.imgSrc!==undefined) {
    return <figure>
  
    <img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>
    <figcaption> {props.pokemon.name} </figcaption>
   </figure>;
}
 else {
    return <figure>

    <p> ??? </p>
    <figcaption> {props.pokemon.name} </figcaption>
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