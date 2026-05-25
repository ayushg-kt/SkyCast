import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedCities: [],
  selectedCity: null,
  favorites: [],
  temperatureUnit: 'C',
  windSpeedUnit: 'km/h',
  loading: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchedCities: (state, action) => {
      state.searchedCities = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setSearchedCities,
  setSelectedCity,
  addFavorite,
  removeFavorite,
  setTemperatureUnit,
  setWindSpeedUnit,
  setLoading,
} = weatherSlice.actions;

export default weatherSlice.reducer;
