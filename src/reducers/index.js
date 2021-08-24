import { combineReducers } from 'redux';
import favoritesReducer from './favorites.reducer.js';
import movieReducer from './movieReducer';

// export default combineReducers({ movies: movieReducer, favorites: favoritesReducer })

export default movieReducer;