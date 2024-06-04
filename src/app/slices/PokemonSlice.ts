import { createSlice } from "@reduxjs/toolkit";
import { PokemonTypeInitialState, generatedPokemonType} from "../../utils/Types";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";
import { getPokemonsData } from "../reducers/getPokemonData";
import { getUserPokemons } from "../reducers/getUserPokemons";
import { removePokemon } from "../reducers/removePokemonFromUserList";

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
  currentPokemon: undefined,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToCompare : (state,action)=>{
      const index = state.compareQueue.findIndex((pokemon : generatedPokemonType)=>pokemon.id === action.payload.id);
      // handle case ki vo pokemon already compare queue me hai ya nahi
      if(index === -1){ // nahi hai to add kardo
        if(state.compareQueue.length === 2){
          state.compareQueue.pop();
        }
        state.compareQueue.unshift(action.payload); // unshift means add to the start of the array, it is similar to push but it adds to the start of the array
      }
    },
    removeFromCompare : (state,action)=>{
      const index = state.compareQueue.findIndex((pokemon : generatedPokemonType)=>pokemon.id === action.payload.id);

      const queue = [...state.compareQueue];
      queue.splice(index,1);
      state.compareQueue = queue;
    },
    setCurrentPokemon : (state,action)=>{
      state.currentPokemon = action.payload;
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(getInitialPokemonData.fulfilled,(state,action)=>{
      state.allPokemon = action.payload; 
    });

    builder.addCase(getPokemonsData.fulfilled,(state,action)=>{
      state.randomPokemons = action.payload;
    });

    builder.addCase(getUserPokemons.fulfilled,(state,action)=>{
      state.userPokemons = action.payload!;
    });

    builder.addCase(removePokemon.fulfilled,(state,action)=>{
      const userPokemon = [...state.userPokemons];
      const index = userPokemon.findIndex((pokemon)=>pokemon.firebaseId === action.payload?.id);

      userPokemon.splice(index,1);
      state.userPokemons = userPokemon;
    });
  }
});

export const {addToCompare,removeFromCompare,setCurrentPokemon} = PokemonSlice.actions;