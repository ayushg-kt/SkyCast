import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedCities: [],
  favorites: [],
  temperatureUnit: 'C',
  windSpeedUnit: 'km/h',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchedCities: (state, action) => {
      state.searchedCities = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload,
      );
    },
    setTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
    },
    setWindSpeedUnit: (state, action) => {
      state.windSpeedUnit = action.payload;
    },
  },
});

export const {
  setSearchedCities,
  addFavorite,
  removeFavorite,
  setTemperatureUnit,
  setWindSpeedUnit,
} = weatherSlice.actions;

export default weatherSlice.reducer;
