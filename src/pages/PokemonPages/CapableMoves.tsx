import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import Loader from "../../components/Loader"; // Import your Loader component

function CapableMoves() {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (
      pokemonData?.pokemonAbilities?.abilities ||
      pokemonData?.pokemonAbilities?.moves
    ) {
      setIsLoaded(false);
    }
  }, [pokemonData]);

  return (
    <div className="page capable-moves">
      {isLoaded ? (
        <Loader /> // Display loader while data is being fetched
      ) : (
        <>
          <h1 className="capable-moves-title">Abilities</h1>
          <ul className="capable-moves-list ability">
            {pokemonData?.pokemonAbilities?.abilities?.map(
              (ability: string) => (
                <li className="move" key={ability}>
                  {ability}
                </li>
              )
            )}
          </ul>
          <h1 className="capable-moves-title">Moves</h1>
          <ul className="capable-moves-list">
            {pokemonData?.pokemonAbilities?.moves?.map((ability: string) => (
              <li className="move" key={ability}>
                {ability}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CapableMoves;
