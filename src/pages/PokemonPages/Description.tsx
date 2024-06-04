import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import PokemonContainer from "../../components/PokemonContainer";
import Info from "../../components/Info";
import Loader from "../../components/Loader"; // Import your Loader component

const Description = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (pokemonData) {
      setIsLoaded(false);
    }
  }, [pokemonData]);

  return (
    <div>
      {isLoaded ? (
        <Loader /> // Display loader while data is being fetched
      ) : (
        pokemonData && (
          <>
            <Info data={pokemonData} />
            <PokemonContainer image={pokemonData?.image!} />
          </>
        )
      )}
    </div>
  );
};

export default Description;
