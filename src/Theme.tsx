import { ThemeProvider } from '@mui/material/styles';
import { useCookies } from "react-cookie";


import { mainTheme } from './Theme/MainTheme.ts';
import { darkTheme } from './Theme/DarkTheme.ts';
import App from './App.tsx';
export default function Theme() {
  const [cookies, setCookie, removeCookie] = useCookies(['dark-mode']);
  return (
    <ThemeProvider theme={cookies['dark-mode'] === 'dark' ? darkTheme : mainTheme}>
      <App />
    </ThemeProvider>
  )
}
