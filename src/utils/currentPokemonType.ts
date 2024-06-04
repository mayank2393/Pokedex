import { pokemonTypeInterface, pokemonStatsType } from "./Types";

export interface currentPokemonType {
  id: number;
  name: string;
  types: pokemonTypeInterface[];
  image: string;
  stats: pokemonStatsType[];
  encounters: string[];
  evolution: { level: number; pokemon: { name: string; url: string } };
}
