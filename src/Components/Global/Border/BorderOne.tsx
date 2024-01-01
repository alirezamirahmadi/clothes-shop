import { Typography, Divider, Box, useTheme } from "@mui/material"

import { BorderOneProp } from "../../../Utils/Types"
export default function BorderOne(props: BorderOneProp) {
  const theme = useTheme();

  return (
    <>
      <Box className="w-11/12 p-1 my-6 mx-auto border shadow-lg rounded-xl" sx={{ backgroundColor: theme.palette.secondColor.main, direction: 'rtl' }}>
        <div dir="rtl" className="flex justify-center mt-2">
          <Typography variant='text2xl' color={theme.palette.textColor.main}>{props.title}</Typography>
        </div>
        {props.title && <Divider variant="middle" sx={{ marginTop: '2px', marginBottom: '15px' }} />}
        <div dir="rtl">
          {props.children}
        </div>
      </Box>
    </>
  )
}