import { useTheme, Box, Typography, Link } from '@mui/material'
// import { Link } from 'react-router-dom';
import Slider from './Slider';
import Products from '../../Components/Global/Products/Products';
import BorderOne from '../../Components/Global/Border/BorderOne';
import Articles from '../../Components/Global/Articles/Articles';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Slider />
      <Box className="m-0" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne title='آخرین محصولات'>
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        <BorderOne title='مقالات'>
          <Articles filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        <BorderOne title='محصولات حراجی'>
          <Products filter='latest' showFilter={false} showPagination={false} />
        </BorderOne>
        <BorderOne title='پوشاک سایز بزرگ زنانه آفتاب'>
          <div dir='rtl' className=""></div>
          <Typography variant='textsm' color={theme.palette.textColor.main} component='div'>
            تا چند سالِ پیش، اگر صحبت از خرید اینترنتی لباس، در میان می‌آمد درک درستی از آن نداشتیم و زیاد برایمان ملموس و عادی نبود، می بایست ساعت ها وقت بگذاریم و در مراکز خرید شلوغ، هزینه و تحقیق و تمرکز کنیم تا بتوانیم مدل دلخواه را با بهترین قیمت خریداری کنیم یعنی تلف شدن وقت و انرژی در این دورانی که اکثرا بدلیل مشغله های کاری نیاز به گذراندن اوقات جهت تفریح، سرگرمی و امور مورد علاقه دارند.
          </Typography>
          <Typography variant='textsm' color={theme.palette.textColor.main}>
            به لطف پیشرفت و گسترش اینترنت در تمام زمینه های زندگیمان، بسیاری از کارها آسان و سریع شده است، پوشاک سایزبزرگ زنانه آفتاب هم برای پیدا کردن جایگاه خود در زمینه فروش اینترنتی
          </Typography>
          {/* <Link href='#'>76</Link> */}
          <Typography variant='textsm' color={theme.palette.textColor.main}>
            زنانه در تلاش است که جدیدترین مدلها با تنوع سایزبندی مختص پلاس سایز و استفاده از رنگ هایی با کالیته روشن و جذاب و با قیمت بسیار مناسب و قابل رقابت در سطح کشور و همچنین ارسال سریع با بسته بندی مناسب در جهت افزایش بیشترِ رضایت مشتریان اینترنتی، گامی موثر و متفاوت بردارد.
          </Typography>

        </BorderOne>
      </Box>
    </>
  )
}
