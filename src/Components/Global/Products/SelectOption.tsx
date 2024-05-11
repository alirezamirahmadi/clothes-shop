import React, { useState, useEffect } from 'react';
import {
  Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel,
  OutlinedInput, FormControl, Select, SelectChangeEvent, Button
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store';

import { ClothesColorType, ClothesSizeType, ProductType } from '../../../Utils/Types';

export default function SelectOption({ clothesSize, clothesColor, handleOptions }: { clothesSize?: ClothesSizeType[], clothesColor?: ClothesColorType[], handleOptions: (size: string, color: string) => void }): React.JSX.Element {

  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<string>('');
  const [listSize, setListSize] = useState<ClothesSizeType[]>([]);
  const [color, setColor] = useState<string>('');
  const [listColor, setListColor] = useState<ClothesColorType[]>([]);
  const productParams = useParams();
  const products = useSelector((state: RootState) => state.products);

  const handleChangeSize = (event: SelectChangeEvent<typeof size>) => {
    setSize(event.target.value || '');
  }

  const handleChangeColor = (event: SelectChangeEvent<typeof color>) => {
    setColor(event.target.value || '');
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      handleOptions(size, color);
      setOpen(false);
    }
  }

  useEffect(() => {
    clothesSize && setListSize(clothesSize)
    clothesColor && setListColor(clothesColor)
  }, [])

  useEffect(() => {
    let tempProduct = products.find((product: ProductType) => product.id.toString() === productParams.idProduct)
    tempProduct && setListSize(tempProduct.size);
    tempProduct && setListColor(tempProduct.color);
  }, [productParams])

  return (
    <div>
      <Button size='small' variant='outlined' onClick={handleClickOpen}>انتخاب سایز و رنگ</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="button">انتخاب سایز و رنگ</Typography>
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="selectSize">سایز</InputLabel>
              <Select native value={size} onChange={handleChangeSize}
                input={<OutlinedInput label="Size" id="selectSize" />}
              >
                <option aria-label="None" value="" />
                {
                  listSize.map(cSize => (
                    <option key={cSize.id} value={cSize.title}>{cSize.title}</option>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="selectColor">رنگ</InputLabel>
              <Select native labelId="selectColor" id="demo-dialog-select" value={color}
                onChange={handleChangeColor} input={<OutlinedInput label="Color" />}
              >
                <option aria-label="None" value="" />
                {
                  listColor.map(cColor => (
                    <option key={cColor.id} value={cColor.title}>{cColor.title}</option>
                  ))
                }
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>بستن</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}