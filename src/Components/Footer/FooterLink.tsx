import React from "react";
import { Typography, Divider, useTheme } from "@mui/material"

import { FooterLinkProp } from "../../Utils/Types"

export default function FooterLink (props:FooterLinkProp):React.JSX.Element {
  const theme = useTheme();

  return (
    <>
      <div className="w-11/12 p-1 my-6 mx-auto">
        <div className="flex justify-center mt-2">
          <Typography variant='textlg' color={theme.palette.textColor.main}>{props.title}</Typography>
        </div>
        <Divider variant="fullWidth" sx={{ marginTop: '10px', marginBottom: '15px' }} />
        {props.children}
      </div>
    </>
  )
}