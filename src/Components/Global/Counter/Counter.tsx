import { useState, useEffect } from 'react'
import { Typography, useTheme } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Button from '../../Global/Button/Button'
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
      <div dir='rtl' className={'border rounded-md shadow flex justify-center overflow-hidden pt-1 w-24 h-9 ' + className}
        style={{ borderColor: theme.palette.mainColor.main, backgroundColor: theme.palette.secondColor.main }}>
        <Button text='+' classStyle='button-second' size='small' className='ml-1 px-4' clickHandler={addCount} />
        <Typography variant="body1">{countValue}</Typography>
        <Button text={countValue > 1 ? '-' : <DeleteForeverIcon />} classStyle='button-second' size='small' className={countValue > 1 ? 'mr-1 px-4' : 'mr-1 px-2'} clickHandler={minusCount} />
      </div>
    </>
  )
}