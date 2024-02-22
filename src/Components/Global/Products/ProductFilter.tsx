import { useState, useEffect } from 'react'
import {
  Typography, InputLabel, OutlinedInput, FormControl, Select, FormGroup, FormControlLabel, Checkbox,
  useTheme, Accordion, AccordionSummary, AccordionDetails, Divider, SelectChangeEvent, TextField
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../../../Redux/Store'

// import { ColorData, SizeData, SortData } from '../../../Utils/Datas'
// import { TextFieldBase } from '../../CustomizedComponent/CutomizedTextField';
import { ProductFilterProp, ClothesColorType, ClothesSizeType, SortType } from "../../../Utils/Types";
import Category from '../Category/Category';
import Toman from '../Utility/Toman';
import { getColorsFromServer } from '../../../Redux/Reducer/ColorReducer';
import { getSizesFromServer } from '../../../Redux/Reducer/SizeReducer';
import { getSortFromServer } from '../../../Redux/Reducer/SortReducer';

export default function ProductFilter({ handleChangeSort, handleChangeSearch, handleChangeSize, handleChangeColor, handlePriceRanges }: ProductFilterProp): React.JSX.Element {

  const theme = useTheme();
  const [sortTitle, setSortTitle] = useState<string>('');
  const [textSearch, setTextSearch] = useState<string>('');
  const [colorList, setColorList] = useState<string>('');
  const [sizeList, setSizeList] = useState<number[]>([]);
  const [priceRanges, setPriceRanges] = useState<number[]>([200000, 750000]);

  const ColorData: ClothesColorType[] = useSelector((state: RootState) => state.colors);
  const SizeData: ClothesSizeType[] = useSelector((state: RootState) => state.sizes);
  const SortData: SortType[] = useSelector((state: RootState) => state.sort);
  const dispatch: AppDispatch = useDispatch();

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
    dispatch(getColorsFromServer());
    dispatch(getSizesFromServer());
    dispatch(getSortFromServer());
  }, [])

  useEffect(() => {
    handleChangeSize(sizeList);
  }, [sizeList])

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
            <Slider range max={1000000} min={100000} value={priceRanges} allowCross={false} onChange={(event:number | number[]) => handleChangePriceRanges(Array.isArray(event) ? event : [])} />
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
                      <Checkbox onChange={() => handleChangeColor(cColor.id.toString())} name={cColor.title} />
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