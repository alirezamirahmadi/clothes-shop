import { Typography, useTheme } from "@mui/material"

import { FooterBoxProp } from "../../Utils/Types"

export default function FooterBox({ title, svgIcon }: FooterBoxProp) {
  const theme = useTheme();
  return (
    <>
      <div className="w-4/5 h-24 p-1 mb-1 border shadow-md " style={{backgroundColor:theme.palette.thirdColor.light}}>
        <div className="flex justify-center">
          {svgIcon}
        </div>
        <div className="flex justify-center">
          <Typography color='textColor' component='div' variant="textbase" color={theme.palette.textColor.main}>{title}</Typography>
        </div>
      </div>
    </>
  )
}