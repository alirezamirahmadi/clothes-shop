
import { Box, useTheme } from "@mui/material"

import BorderOne from "../../Components/Global/Border/BorderOne"

export default function Privacy(): React.JSX.Element {
  const theme = useTheme();
  return (
    <>
      <Box className="my-auto pt-1" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne title="حریم خصوصی">

        </BorderOne>
      </Box>
    </>
  )
}