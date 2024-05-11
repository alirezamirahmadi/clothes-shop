import {Box, useTheme} from '@mui/material'

import BorderOne from '../../Components/Global/Border/BorderOne'

export default function AboutUs() {
  const theme = useTheme();
  return (
    <>
      <Box className="my-auto pt-1">
					<BorderOne title="درباره ما">

          </BorderOne>
      </Box>
    </>
  )
}