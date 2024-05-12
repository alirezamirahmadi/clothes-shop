import { useState, useEffect } from 'react'
import {
  Typography, InputLabel, OutlinedInput, FormControl, Select, FormGroup, FormControlLabel, Checkbox,
  Accordion, AccordionSummary, AccordionDetails, Divider, SelectChangeEvent, TextField, Button
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import type { ClothesColorType, ClothesSizeType, SortType } from "../../../Utils/Types";
import Category from '../Category/Category';
import Toman from '../Utility/Toman';
import { useColor } from '../../../Hooks/ColorHook';
import { useSize } from '../../../Hooks/SizeHook';
import { useSort } from '../../../Hooks/SortHook';

export default function ProductFilter(): React.JSX.Element {

  const [sortTitle, setSortTitle] = useState<string>('');
  const [textSearch, setTextSearch] = useState<string>('');
  const [sizeList, setSizeList] = useState<number[]>([]);
  const [priceRanges, setPriceRanges] = useState<number[]>([0, 1_000_000]);
  const { data: ColorData } = useColor();
  const { data: SizeData } = useSize();
  const { data: SortData } = useSort();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (event: SelectChangeEvent) => {
    const sortValue: string = event.target.value;
    setSortTitle(sortValue);
    searchParams.delete('_sort');
    const params = searchParams + (searchParams ? '&' : '?');
    switch (sortValue) {
      case 'cheapest':
        setSearchParams(params + `_sort=price`);
        break;
    }
  }

  const handleSearch = (value: string) => {
    setTextSearch(value);
  }

  const handleSize = (checked: boolean, value: number) => {
    let tempArray: number[] = [...sizeList];
    setSizeList(!checked ? [...tempArray].filter(s => s != value) : [...tempArray, value]);
  }

  const handleChangePriceRanges = (event: number[]) => {
    setPriceRanges([...event]);
  }

  const handlePriceFilter = () => {
    searchParams.delete('price_lte');
    searchParams.delete('price_gte');
    const params = searchParams + (searchParams ? '&' : '?');
    setSearchParams(params + `price_lte=${priceRanges[1]}&price_gte=${priceRanges[0]}`);
  }

  useEffect(() => {
    const minPrice = searchParams.get('price_gte');
    const maxPrice = searchParams.get('price_lte');
    minPrice && maxPrice && setPriceRanges([+minPrice, +maxPrice]);
  }, [])

  return (
    <>
      <div dir='rtl' className="border rounded-lg shadow-md px-2 pt-4 me-2 my-2">
        <div>
          <TextField value={textSearch} onChange={event => handleSearch(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2" >جستجو</Typography>} size="small" color="primary" />
        </div>
        <div>
          <FormControl sx={{ marginTop: 1, minWidth: 120 }}>
            <InputLabel htmlFor="dialog-sort">مرتب سازی</InputLabel>
            <Select native value={sortTitle} onChange={handleSort}
              input={<OutlinedInput label="Sort" id="dialog-sort" />}
            >
              <option aria-label="None" value="" />
              {
                SortData?.map((cSort: SortType) => (
                  <option key={cSort.id} value={cSort.value}>{cSort.title}</option>
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
            <Slider range max={1000000} min={100000} value={priceRanges} allowCross={false} onChange={(event: number | number[]) => handleChangePriceRanges(Array.isArray(event) ? event : [])} />
            <Button onClick={handlePriceFilter} variant='outlined' sx={{ mt: 2 }}>فیلتر</Button>
          </div>
        </div>
        <Divider variant='middle' sx={{ marginY: 1, height: 1.2 }} />
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant='body1' >انتخاب سایز</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <FormGroup>
                  {SizeData?.map((cSize: ClothesSizeType) => (
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
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant='body1' >انتخاب رنگ</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <FormGroup>
                  {ColorData?.map((cColor: ClothesColorType) => (
                    <FormControlLabel key={cColor.id} control={
                      <Checkbox name={cColor.title} />
                    } label={<Typography variant='body1' >{cColor.title}</Typography>}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Category />
        </div>
      </div>
    </>
  )
}