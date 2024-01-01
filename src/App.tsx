import { useRoutes } from 'react-router-dom'
import { useTheme, Box } from '@mui/material';

import '../dist/tailwindOut.css';

import Header from './Components/Header/Header';
import routes from './Route/Routes';
import Footer from './Components/Footer/Footer';
import FixedFooter from './Components/FixedFooter/FixedFooter';

export default function App(): React.JSX.Element {
  const router = useRoutes(routes);
  const theme = useTheme();

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.secondColor.main }}>
        <Header />
        {router}
        <FixedFooter />
        <Footer />
      </Box>
    </>
  )
}
