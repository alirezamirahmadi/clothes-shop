import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
// import BNazanin from '../Fonts/BNazanin.ttf'

declare module '@mui/material/styles' {
  // interface Theme {
  //   status: {
  //     danger: string;
  //   };
  // }
  // // allow configuration using `createTheme`
  // interface ThemeOptions {
  //   status?: {
  //     danger?: string;
  //   };
  // }

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
      main: '#fdcd48',
      light:'#ffe8a9',
      // contrastText: '#f0f0f0',
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
  // components: {
  //   MuiTextFieldBase:{
  //     defaultProps:{
  //         fontFamily:'B Nazanin',
  //     }
  //   },
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'B Nazanin;
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('BNazanin'), local('BNazanin-Regular'), url(${BNazanin}) format('ttf');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },
});

export { mainTheme, cacheRtl }