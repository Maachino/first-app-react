

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
  

  export default PokemonCard;