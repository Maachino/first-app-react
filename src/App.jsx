import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
    const [count, setCount] = useState(0);

    const next = () => {
      if (count < pokemonList.length-1) { setCount(count+1) }
    }
    const previous = () => {
      if (count > 0) { setCount(count-1 )}
    
    }
    
    return (
      <div>
        <PokemonCard pokemon={pokemonList[count]} />
                <button onClick={previous}>previous Pokemon</button>
        <button onClick={next}>Next Pokemon</button>
        <br/><p>Pokemon number {count+1} Of {pokemonList.length}</p>
      </div>
    );
    }
    
  
export default App;