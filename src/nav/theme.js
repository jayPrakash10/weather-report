import React from "react";

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
      navtheme : 'navbar navbar-expand-lg navbar-dark bg-dark',
      swiththeme : 'check dark'
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
      navtheme : 'navbar navbar-expand-lg navbar-light bg-light',
      swiththeme: 'check light'
    },
  }
  
export const ThemeContext = React.createContext(themes.light);