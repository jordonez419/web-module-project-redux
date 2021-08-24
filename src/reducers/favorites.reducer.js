import { connect } from "react-redux"
import { TOGGLE_FAVORITES } from "../actions/favorites.actions"

const initialState = {
    favorites: 'dsa',
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state
    }
}


export default favoritesReducer;