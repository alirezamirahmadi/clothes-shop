import { useTheme, Box } from '@mui/material'
import Slider from './Slider';
import Products from '../../Components/Global/Products/Products';
import BorderOne from '../../Components/Global/Border/BorderOne';
import Articles from '../../Components/Global/Articles/Articles';
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState, AppDispatch } from '../../Redux/Store'
// import { CategoryData } from '../../Utils/Datas';
import CategoryCard from '../../Components/Global/Category/CategoryCard';
// import { CategoryType } from '../../Utils/Types';
import { useMainCategory } from '../../Hooks/MainCategoryHook';

export default function Home() {
  const theme = useTheme();
  const { data: CategoryData } = useMainCategory();
  // const dispatch: AppDispatch = useDispatch();
  // const CategoryData:CategoryType[] = useSelector((state: RootState) => state.category);

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <Slider />
      </Box>
      <Box className="py-8" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne title='آخرین محصولات'>
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        {CategoryData &&
          <div dir='rtl' className="mt-8 mx-7 lg:mx-12 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-8 justify-items-center items-center">
            <div className="col-span-2 row-span-2 "><CategoryCard {...CategoryData[0]} /></div>
            <div><CategoryCard {...CategoryData[1]} /></div>
            <div><CategoryCard {...CategoryData[2]} /></div>
            <div><CategoryCard {...CategoryData[3]} /></div>
            <div><CategoryCard {...CategoryData[4]} /></div>
          </div>
        }
        <BorderOne title='مقالات' className='mt-8'>
          <Articles filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        <BorderOne title='محصولات حراجی' className='mt-8'>
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        <BorderOne title='پوشاک سایز بزرگ زنانه آفتاب' className='mt-8'>

        </BorderOne>
      </Box>
    </>
  )
}
