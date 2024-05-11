import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import sahel from '../Fonts/Sahel-FD.woff2';
import App from '../App.tsx';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheDataTable = createCache({
  key: "mui-datatables",
  prepend: true
});

export default function Theme() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  let theme = createTheme({});
  theme = useMemo(() =>

    createTheme({
      direction: 'rtl',

      palette: {
        mode,

        primary: {
          main: '#FF8A00', // fdcd48
          light: '#f5b76e',
          contrastText: '#fff',
        },
      },
      typography: {
        fontFamily: ['sahel, arial'].join(","),
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'sahel';
              src: url(${sahel}) format('woff2');
            }
          `,
        },
      },
    }),
    [mode]
  )

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  )
}

export { cacheDataTable };
