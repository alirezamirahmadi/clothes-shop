import { useTheme, Box } from '@mui/material'
import Slider from './Slider';
import Products from '../../Components/Global/Products/Products';
import BorderOne from '../../Components/Global/Border/BorderOne';
import Articles from '../../Components/Global/Articles/Articles';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Slider />
      <Box className="py-5" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne title='آخرین محصولات'>
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        <BorderOne title='مقالات' className='mt-4'>
          <Articles filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        <BorderOne title='محصولات حراجی' className='mt-4'>
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        <BorderOne title='پوشاک سایز بزرگ زنانه آفتاب' className='mt-4'>

        </BorderOne>
      </Box>
    </>
  )
}
