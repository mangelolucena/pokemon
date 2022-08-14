import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

type Sprites = {
  other: OtherSprites;
};

type OtherSprites = {
  dream_world: DreamWorldSprite;
};

type DreamWorldSprite = {
  front_default: string;
};

type Pokemon = {
  name: string;
  sprites: Sprites;
};

type PokemonDataState = {
  data: Pokemon;
  loading: boolean;
  error: string;
};

const initialState: PokemonDataState = {
  data: {name: '', sprites: {other: {dream_world: {front_default: ''}}}},
  loading: false,
  error: '',
};

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/pikachu',
    );
    return response;
  },
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPokemon.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.loading = false;
      state.data = initialState.data;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default pokemonSlice.reducer;
