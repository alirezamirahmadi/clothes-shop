import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

declare module '@mui/material/styles' {

  interface Palette {
    mainColor: Palette['primary'];
    secondColor: Palette['primary'];
    thirdColor: Palette['primary'];
    textColor: Palette['primary'];
  }

  interface PaletteOptions {
    mainColor?: PaletteOptions['primary'];
    secondColor?: PaletteOptions['primary'];
    thirdColor?: PaletteOptions['primary'];
    textColor?: PaletteOptions['primary'];
  }
}

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

let mainTheme = createTheme({});
mainTheme = createTheme(mainTheme, {
  // direction: 'rtl',
  palette: {
    mainColor: {
      main: '#FF8A00', // fdcd48
      light:'#ffe8a9',
      contrastText: '#333333',
    },
    secondColor: {
      main: '#ffffff',
      contrastText: '#fdcd48',
    },
    thirdColor: {
      main: '#f0f0f0',
      light:'#f7f7f7'
    },
    borderColor: {
      main: '#475569',
    },
    textColor: {
      main: '#333333',
    },
  },
  typography: {
    fontFamily: ["B Nazanin"].join(","),
    button: { 
      fontFamily: 'B Nazanin',
      fontSize: 16,
      fontWeight: 600,
    },
    textxs: {
      fontFamily: 'B Nazanin',
      fontSize: 12,
    },
    textsm: {
      fontFamily: 'B Nazanin',
      fontSize: 14,
    },
    textbase: {
      fontFamily: 'B Nazanin',
      fontSize: 16,
      fontWeight: 600,
    },
    textlg: {
      fontFamily: 'B Nazanin',
      fontSize: 18,
      fontWeight: 600,
    },
    textxl: {
      fontFamily: 'B Nazanin',
      fontSize: 20,
    },
    text2xl: {
      fontFamily: 'B Nazanin',
      fontSize: 24,
    },
    text3xl: {
      fontFamily: 'B Nazanin',
      fontSize: 30,
    },
    text4xl: {
      fontFamily: 'B Nazanin',
      fontSize: 36,
    },
  },
});

export { mainTheme, cacheRtl }