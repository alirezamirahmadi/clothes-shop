import { Typography } from "@mui/material";

import { IconTextProp } from "../../../Utils/Types";

export default function IconText({icon, text, textSize, textColor}:IconTextProp) {
    
    return(
        <>
            <div className="flex align-middle m-1">
                <div className="me-1">{icon}</div>
                <Typography sx={{marginTop:0.5}} component='div' color={textColor} variant={textSize}>{text}</Typography>
            </div>
        </>
    )
}