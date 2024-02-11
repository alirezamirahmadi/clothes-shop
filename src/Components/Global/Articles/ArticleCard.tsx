import { useState } from "react";
import { Link } from 'react-router-dom'
import { Typography, useTheme } from "@mui/material";

import { ArticleCardProp } from "../../../Utils/Types";

export default function ArticleCard({ id, image, title, context }: ArticleCardProp) {
  const [isImageLoad, setIsImageLoad] = useState(false);
  const theme = useTheme();
  const loadImageHandler = () => {
    setIsImageLoad(true);
  }
  return (
    <>
      <div dir="rtl" className="rounded-2xl overflow-hidden max-w-sm mb-7 shadow">
        <Link className="" to={`/article-info/${id}`}>
          <img className='w-full h-50 block mx-auto'
            src={image} alt="" onLoad={loadImageHandler} />
          {/* {!isImageLoad && <ShimmerThumbnail height={180} />} */}
          <div className="h-7 overflow-hidden">
            <Typography className="px-3" variant="h6" component='p'>{title}</Typography>
          </div>
        </Link>
        <Typography variant="body2" component='p' className="line-clamp-2 px-3">{context}</Typography>
        <div className="flex justify-center mt-4">
          <Link to={`/article-info/${id}`}>
            <Typography color={theme.palette.mainColor.main} variant="body1">ادامه مطلب</Typography>
          </Link>
        </div>
      </div>
    </>
  )
}