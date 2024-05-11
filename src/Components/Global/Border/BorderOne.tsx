import { Typography, Divider } from "@mui/material";

import { BorderOneProp } from "../../../Utils/Types";
export default function BorderOne(props: BorderOneProp) {

  return (
    <>
      <div className={("w-11/12 px-5 pt-1 pb-3 mx-auto shadow-sm rounded-3xl ") + props.className} style={{ direction: 'rtl' }}>
        <div dir="rtl" className="flex justify-center mt-2">
          {props.title && <img className="w-5 me-3" src="../../../public/Image/Border/right-title-border.png" alt="" />}
          <Typography variant='h5'>{props.title}</Typography>
          {props.title && <img className="w-5 ms-3" src="../../../public/Image/Border/left-title-border.png" alt="" />}
        </div>
        {props.title && <Divider variant="middle" sx={{ marginTop: '2px', marginBottom: '15px' }} />}
        <div dir="rtl">
          {props.children}
        </div>
      </div>
    </>
  )
}