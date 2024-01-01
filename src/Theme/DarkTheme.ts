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
    borderColor: Palette['primary'];
  }

  interface PaletteOptions {
    mainColor?: PaletteOptions['primary'];
    secondColor?: PaletteOptions['primary'];
    thirdColor?: PaletteOptions['primary'];
    borderColor?: PaletteOptions['primary'];
    textColor?: PaletteOptions['primary'];
  }
}

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

let darkTheme = createTheme({});
darkTheme = createTheme(darkTheme, {
  // direction: 'rtl',
  palette: {
    mode: 'dark',
    mainColor: {
      main: '#fdcd48',
      light:'#ffe8a9',
      contrastText: '#ffffff',
    },
    secondColor: {
      main: '#0f1924',
      contrastText: '#fdcd48',
    },
    thirdColor: {
      main: '#0f1924',
      light:'#0f1924'
    },
    borderColor: {
      main: '#475569',
    },
    textColor: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: ["B Nazanin"].join(","),
    // h1:{fontSize:20}
    // fontSize: 50,
    button: { // Here is where you can customise the button
      fontFamily: 'B Nazanin',
      fontSize: 16,
      fontWeight: 600,
    },
    textxs: {
      fontFamily: 'B Nazanin',
      fontSize: 12,
      // lineHeight: 16,
    },
    textsm: {
      fontFamily: 'B Nazanin',
      fontSize: 14,
      // lineHeight: 20,
    },
    textbase: {
      fontFamily: 'B Nazanin',
      fontSize: 16,
      fontWeight: 600,
      // lineHeight: 24,
    },
    textlg: {
      fontFamily: 'B Nazanin',
      fontSize: 18,
      fontWeight: 600,
      // lineHeight: 28,
    },
    textxl: {
      fontFamily: 'B Nazanin',
      fontSize: 20,
      // dir:'rtl',
      // lineHeight: 28,
    },
    text2xl: {
      fontFamily: 'B Nazanin',
      fontSize: 24,
      // lineHeight: 32,
    },
    text3xl: {
      fontFamily: 'B Nazanin',
      fontSize: 30,
      // lineHeight: 36,
    },
    text4xl: {
      fontFamily: 'B Nazanin',
      fontSize: 36,
      // lineHeight: 40,
    },
  },
});

export { darkTheme, cacheRtl }