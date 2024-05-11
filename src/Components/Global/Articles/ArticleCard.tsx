import { useState } from "react";
import { Link } from 'react-router-dom';
import { Typography, useTheme, Skeleton } from "@mui/material";

import { ArticleCardProp } from "../../../Utils/Types";

export default function ArticleCard({ id, image, title, context }: ArticleCardProp) {
  
  const [isImageLoad, setIsImageLoad] = useState(false);
  const theme = useTheme();

  const loadImageHandler = () => {
    setIsImageLoad(true);
  }
  
  return (
    <>
      <div dir="rtl" className="rounded-2xl overflow-hidden max-w-sm mb-7 shadow hover:shadow-lg ms-1">
        <Link className="" to={`/article-info/${id}`}>
          <img className='w-full h-60 mx-auto' style={{ display: isImageLoad ? 'block' : 'none' }} src={image} alt="" onLoad={loadImageHandler} />
          {!isImageLoad && <Skeleton variant="rounded" animation='wave' width='100%' height='15rem' />}
          <div className="h-7 overflow-hidden">
            <Typography className="px-3" variant="h6" component='p'>{title}</Typography>
          </div>
        </Link>
        <Typography variant="body2" component='p' className="line-clamp-2 px-3">{context}</Typography>
        <div className="flex justify-center mt-4">
          <Link to={`/article-info/${id}`}>
            <Typography color={theme.palette.primary.main} variant="body1">ادامه مطلب</Typography>
          </Link>
        </div>
      </div>
    </>
  )
}