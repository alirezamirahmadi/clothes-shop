import { useRoutes } from 'react-router-dom'
import { useTheme, Box } from '@mui/material';
import { useSelector } from "react-redux";
import type { RootState } from './Redux/Store'

import '../dist/tailwindOut.css';

import Header from './Components/Header/Header';
import routes from './Route/Routes';
import Footer from './Components/Footer/Footer';
import FixedFooter from './Components/FixedFooter/FixedFooter';

export default function App(): React.JSX.Element {
  const loginInfo = useSelector((state: RootState) => state.login);
  const router = useRoutes(routes(loginInfo.isLogin));
  // const theme = useTheme();

  return (
    <>
      <Box
        // sx={{ backgroundColor: theme.palette.secondColor.main }}
      >
        <Header />
        {router}
        <FixedFooter />
        <Footer />
      </Box>
    </>
  )
}
