import { useState, useEffect } from 'react';
import { Typography, useTheme, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { CounterProp } from '../../../Utils/Types';

export default function Counter({ value, minValue = 0, maxValue = 10, className, getValue }: CounterProp) {

  const theme = useTheme();
  const [countValue, setCountValue] = useState(value);

  const addCount = () => {
    countValue < maxValue && setCountValue(preValue => preValue + 1)
  }

  const minusCount = () => {
    countValue > minValue && setCountValue(preValue => preValue - 1)
  }

  useEffect(() => {
    getValue(countValue);
  }, [countValue])
  
  return (
    <>
      <div dir='rtl' className={'border rounded-md shadow-md flex justify-center overflow-hidden w-24 h-9 ' + className}
        style={{ borderColor: theme.palette.mainColor.main, backgroundColor: theme.palette.secondColor.main }}>
        <Button variant='text' size='small' sx={{ m: 0, p: 0, minWidth: '50px' }} onClick={addCount}>+</Button>
        <Typography variant="body1" sx={{ my: 'auto' }}>{countValue}</Typography>
        <Button variant='text' size='small' sx={{ m: 0, p: 0, minWidth: '50px' }} onClick={minusCount}>{countValue > 1 ? '-' : <DeleteForeverIcon />}</Button>
      </div>
    </>
  )
}