const SET_THEME_COLOR = 'themes/SET_THEME_COLOR';

const initState = {
    colors: ['#ffb400', '#fd7e14', '#007bff', '#6610f2', '#e83e8c', '#dc3545', '#28a745', '#20c997', '#17a2b8'],
    themeColor: '#FFB400'
}

export const themesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_THEME_COLOR: {
            return {...state, themeColor: action.color}
        }
        default:
            return state
    }
}

export const setThemeColorAC = (color) => {
    return {type: SET_THEME_COLOR, color}
}