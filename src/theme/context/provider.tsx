import React, { useReducer } from 'react';

import { ThemeName } from '../types';
import ActionTypes from './actions';
import Reducer from './reducer';
import { initialState, THEME_KEY, ThemeContext } from './state';

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setTheme = (theme: ThemeName) => {
    if (window) {
      window.localStorage.setItem(THEME_KEY, theme);
    }
    dispatch({ type: ActionTypes.SET_THEME, payload: theme });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;
