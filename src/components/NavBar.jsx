import { useState } from "react";

import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

  const [alertShown, setAlertShown] = useState(false);
  const pickPrevious = () => {
    const newIndex = pokemonIndex - 1;
    setPokemonIndex(newIndex);

    // Affichez l'alerte "pika pikachu !!!" lorsque le pokémon choisi devient "pikachu"
    if (pokemonList[newIndex].name === "pikachu" && !alertShown) {
      alert("pika pikachu !!!");
      setAlertShown(true);
    }
  };

  const pickNext = () => {
    const newIndex = pokemonIndex + 1;
    setPokemonIndex(newIndex);

    // Affichez l'alerte "pika pikachu !!!" lorsque le pokémon choisi devient "pikachu"
    if (pokemonList[newIndex].name === "pikachu" && !alertShown) {
      alert("pika pikachu !!!");
      setAlertShown(true);
    }
  };
  return (
    <nav>
      {pokemonIndex > 0 && (
        <button type="button" onClick={pickPrevious}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={pickNext}>
          Suivant
        </button>
      )}
    </nav>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired
  ),
};

export default NavBar;