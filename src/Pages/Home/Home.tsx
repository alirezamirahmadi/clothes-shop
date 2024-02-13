import { useTheme, Box } from '@mui/material'
import Slider from './Slider';
import Products from '../../Components/Global/Products/Products';
import BorderOne from '../../Components/Global/Border/BorderOne';
import Articles from '../../Components/Global/Articles/Articles';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <Slider />
      </Box>
      <Box className="py-8" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne title='آخرین محصولات'>
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
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
