import React, { useState } from 'react';
import { useTheme, Box, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store'

import { TextFieldRounded50 } from '../../CustomizedComponent/CutomizedTextField';
import ProductHCard from '../../Global/Products/ProductHCard';
import { ProductType } from '../../../Utils/Types'

export default function ProductSearch({ itemWidth, getValue }: { itemWidth: number, getValue?:(value:string) => void }): React.JSX.Element {
  const theme = useTheme();
  const products = useSelector((state:RootState) => state.products);
  const [textSearch, setTextSearch] = useState('');

  const handleChangeSearch = (value:string) => {
    setTextSearch(value);
    getValue && getValue(value);
  }

  return (
    <>
      <Autocomplete
        id="product-select"
        sx={{ width: itemWidth}}
        options={products}
        freeSolo
        autoHighlight 
        getOptionLabel={(Product: ProductType) => Product.title}
        renderOption={(props, products) => (
          <Box
          // sx={{ ':hover': { color:theme.palette.secondColor.main }, bgcolor:theme.palette.secondColor.main }} 
          {...props}>
            <ProductHCard {...products} showType='col-search' />
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            sx={{bgcolor:theme.palette.thirdColor.light, borderRadius:100, boxShadow:'0 1px 2px 0 rgba(0, 0, 0, 0.3)', '.MuiInputBase-root':{borderRadius:100} }}
            value={textSearch}
            onChange={event => handleChangeSearch(event.target.value)}
            // theme={theme}
            placeholder='جستجوی محصولات'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', 
            }}
          />
        )}
      />
    </>
  );
}