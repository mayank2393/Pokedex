// @ts-nocheck

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultImages, images} from "../../utils/getPokemonImages";
import { generatedPokemonType, genericPokemonType } from "../../utils/Types";
import { pokemonTypes } from "../../utils/getPokemonTypes";

export const getPokemonsData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: generatedPokemonType[] = [];
      for await (const pokemon of pokemons) {
        const {
          data,
        }: {
          data: {
            id: number;
            types: { type: genericPokemonType }[];
          };
        } = await axios.get(pokemon.url);
        const types = data.types.map(
          ({ type: { name } }: { type: { name: string } }) => ({
            // @ts-expect-error
            [name]: pokemonTypes[name],
          })
        );
        let image: string = images[data.id];
        if (!image) {
          image = defaultImages[data.id];
        }
        if (image) {
          pokemonsData.push({
            name: pokemon.name,
            id: data.id,
            image,
            types,
          });
        }
        else{
            console.log("No Image Found")
        }
      }
      // console.log({pokemonsData});
      return pokemonsData;
    } catch (err) {
      console.error(err);
    }
  }
);
