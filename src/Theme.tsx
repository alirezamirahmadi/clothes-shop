import { ThemeProvider } from '@mui/material/styles';

import App from './App.tsx';
export default function Theme() {
  return (
    <ThemeProvider theme={'dark'}>
      <App />
    </ThemeProvider>
  )
}
