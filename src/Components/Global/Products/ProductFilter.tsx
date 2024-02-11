import { useState, useEffect } from 'react'
import {
  Typography, InputLabel, OutlinedInput, FormControl, Select, FormGroup, FormControlLabel, Checkbox,
  useTheme, Accordion, AccordionSummary, AccordionDetails, Divider, SelectChangeEvent
} from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { ColorData, SizeData, SortData } from '../../../Utils/Datas'
import { TextFieldBase } from '../../CustomizedComponent/CutomizedTextField';
import { ProductFilterProp } from "../../../Utils/Types";
import Category from '../Category/Category';
import Toman from '../Utility/Toman';

export default function ProductFilter({ handleChangeSort, handleChangeSearch, handleChangeSize, handleChangeColor, handlePriceRanges }: ProductFilterProp):React.JSX.Element {

  const theme = useTheme();
  const [sortTitle, setSortTitle] = useState<string>('');
  const [textSearch, setTextSearch] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [sizeList, setSizeList] = useState<number[]>([]);
  const [priceRanges, setPriceRanges] = useState<number[]>([200000, 750000]);

  const handleSort = (event: SelectChangeEvent) => {
    setSortTitle(event.target.value);
    handleChangeSort(event.target.value);
  }
  const handleSearch = (value: string) => {
    setTextSearch(value);
    handleChangeSearch(value);
  }
  const handleSize = (checked: boolean, value: number) => {
    let tempArray: number[] = [...sizeList];
    setSizeList(!checked ? [...tempArray].filter(s => s != value) : [...tempArray, value]);
  }
  const handleChangePriceRanges = (event: number[]) => {
    setPriceRanges([...event]);
    handlePriceRanges(event);
  }
  const handleSelectCategory = (idCategory: number): void => {

  }

  useEffect(() => {
    handleChangeSize(sizeList);
  }, [sizeList])

  return (
    <>
      <div dir='rtl' className="border rounded-lg shadow-md px-2 pt-4 me-2 my-2">
        <div>
          <TextFieldBase value={textSearch} onChange={event => handleSearch(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2" >جستجو</Typography>} size="small" color="mainColor" />
        </div>
        <div>
          <FormControl sx={{ marginTop: 1, minWidth: 120 }}>
            <InputLabel htmlFor="dialog-sort">مرتب سازی</InputLabel>
            <Select native value={sortTitle} onChange={handleSort}
              input={<OutlinedInput label="Sort" id="dialog-sort" />}
            >
              <option aria-label="None" value="" style={{ backgroundColor: theme.palette.secondColor.main }} />
              {
                SortData.map(cSort => (
                  <option key={cSort.id} value={cSort.value} style={{ backgroundColor: theme.palette.secondColor.main }}>{cSort.title}</option>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="mt-2 mx-3">
          <Typography variant='body1' >محدوده قیمت</Typography>
          <div className="pt-1 flex flex-col">
            <Typography variant='body2' >{priceRanges[0].toLocaleString()}{<Toman color='inherit' />}</Typography>
            <Typography variant='body2' >{priceRanges[1].toLocaleString()}{<Toman color='inherit' />}</Typography>
            <Slider range max={1000000} min={100000} value={priceRanges} allowCross={false} onChange={event => handleChangePriceRanges(event)} />
          </div>
        </div>
        <Divider variant='middle' sx={{ marginY: 1, height: 1.2 }} />
        <div>
          <Accordion sx={{ bgcolor: theme.palette.secondColor.main }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant='body1' >انتخاب سایز</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <FormGroup>
                  {SizeData.map(cSize => (
                    <FormControlLabel key={cSize.id} control={
                      <Checkbox onChange={(event) => handleSize(event.target.checked, cSize.id)} name={cSize.title} />
                    } label={<Typography variant='body1' >{cSize.title}</Typography>}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className='mt-2'>
          <Accordion sx={{ bgcolor: theme.palette.secondColor.main }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant='body1' >انتخاب رنگ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <FormGroup>
                  {ColorData.map(cColor => (
                    <FormControlLabel key={cColor.id} control={
                      <Checkbox onChange={() => handleChangeColor(cColor.id)} name={cColor.title} />
                    } label={<Typography variant='body1' >{cColor.title}</Typography>}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Category handleSelectCategory={handleSelectCategory} />
        </div>
      </div>
    </>
  )
}