import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsRoute } from "../../utils/Constants";
import axios from "axios";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData",async()=>{
    try {
        const {data} = await axios.get(pokemonsRoute);
        return data.results;
    } catch (error:any) {
        console.log(error.message)
    }
});