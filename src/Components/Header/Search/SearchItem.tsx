import React from 'react'
import { Box, Typography } from "@mui/material"

import { SearchItemProps } from '../../../Utils/Types'
import { mainTheme } from '../../../Theme/MainTheme'

export default function SearchItem(product: SearchItemProps): React.JSX.Element {
  return (
    <>
      <Box sx={{ fontFamily: mainTheme.typography.fontFamily }}>
        <Typography variant='body1' component='div'>{product.title}</Typography>
        <Typography variant='body2' component='div'>کد: {product.code}</Typography>
        <Typography variant='body2' component='div' color={mainTheme.palette.mainColor.main} >{product.price} تومان</Typography>
      </Box>
      <img
        loading="lazy"
        width="65"
        height="80"
        srcSet={`../../../../public/Image/Products/${product.code.toLowerCase()}/${product.code.toLowerCase()}.jpg 6x`}
        src={`../../../../public/Image/Products/${product.code.toLowerCase()}/${product.code.toLowerCase()}.jpg`}
        alt=""
      />
    </>
  )
}