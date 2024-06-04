import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getPokemonsData } from '../../app/reducers/getPokemonData';
import PokemonCardGrid from '../../components/PokemonCardGrid';
import Loader from '../../components/Loader';


function Evolution() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const {currentPokemon,randomPokemons} = useAppSelector(({ pokemon }) => pokemon);
  useEffect(() => {
    const fetchData = async () => {
      const pokemons =
        currentPokemon?.evolution.map(
          ({ pokemon }) => pokemon
        );
      await dispatch(getPokemonsData(pokemons!));
      setIsLoaded(true);
    };
    fetchData();
  }, [dispatch, currentPokemon]);

  return (
    <div className="page">
      {isLoaded ? (
        <PokemonCardGrid pokemons={randomPokemons!} />
      ) : (
        <Loader  />
      )}
    </div>
  );
}
export default Evolution