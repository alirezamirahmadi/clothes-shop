import { Typography, useTheme } from "@mui/material"

import { FooterBoxProp } from "../../Utils/Types"

export default function FooterBox({ title, svgIcon }: FooterBoxProp): React.JSX.Element {
  const theme = useTheme();
  return (
    <>
      <div className="w-4/5 h-24 p-1 mb-1 rounded-xl shadow-md " style={{ backgroundColor: theme.palette.thirdColor.light }}>
        <div className="flex justify-center">
          {svgIcon}
        </div>
        <div className="flex justify-center">
          <Typography component='div' variant="body1">{title}</Typography>
        </div>
      </div>
    </>
  )
}