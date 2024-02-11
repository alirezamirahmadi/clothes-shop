import { Typography, useTheme, Box } from '@mui/material'
import { Link } from 'react-router-dom';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import MessageIcon from '@mui/icons-material/Message';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import FooterBox from "./FooterBox";
import FooterLink from "./FooterLink";
import IconText from "../Global/IconText/IconText";
import SocialNetwork from '../../Components/Global/SocialNetwork/SocialNetwork';
import React from 'react';

export default function Footer():React.JSX.Element {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.thirdColor.main }}>
        <div dir="rtl" className="grid md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center px-5 pt-5 pb-2 mb=2">
          <FooterBox title="ارسال سریع و فوری"
            svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" x="0" y="0" viewBox="0 0 24 24"><g transform="matrix(1.1099999999999994,0,0,1.1099999999999994,-1.3199999999999932,-1.319999947547906)"><g data-name="Layer 2"><path fill="#FDCD48" d="M17.25 14.5a.74.74 0 0 1-.53-.22L15 12.53a.75.75 0 0 1-.22-.53V9a.75.75 0 0 1 1.5 0v2.69l1.53 1.53a.75.75 0 0 1 0 1.06.74.74 0 0 1-.56.22z" data-original="#7fbde7"></path><g fill="#232323"><path d="M15.5 19.25A7.25 7.25 0 1 1 22.75 12a7.26 7.26 0 0 1-7.25 7.25zm0-13A5.75 5.75 0 1 0 21.25 12a5.76 5.76 0 0 0-5.75-5.75zM6.5 12.75H2a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 0 1.5zM7.5 8.75H5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z" fill="#575D65" data-original="#232323"></path><path d="M7.5 16.75H5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z" fill="#575D65" data-original="#232323"></path></g></g></g></svg>} />
          <FooterBox title="گارانتی اصالت و سلامت فیزیکی"
            svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" x="0" y="0" viewBox="0 0 415.869 415.869"><g><path d="M193.306 282.645c-4.702 0-8.882-2.09-11.494-5.224l-78.89-85.682c-5.747-6.269-5.224-16.196 1.045-21.943s16.196-5.224 21.943 1.045l67.918 73.665L381.91 56.947c6.269-6.269 16.196-6.269 21.943 0s6.269 16.196 0 21.943L204.278 277.943c-2.613 3.135-6.792 4.702-10.972 4.702z" fill="#FDCD48" data-original="#00bbd3"></path><path d="M207.935 415.869C93.518 415.869 0 322.351 0 207.935S93.518 0 207.935 0c8.882 0 15.673 6.792 15.673 15.673s-6.792 15.673-15.673 15.673c-97.176 0-176.588 79.412-176.588 176.588s79.412 176.588 176.588 176.588 176.588-79.412 176.588-176.588c0-8.882 6.792-15.673 15.673-15.673s15.673 6.792 15.673 15.673c0 114.417-93.518 207.935-207.934 207.935z" fill="#575D65" data-original="#3a2c51"></path></g></svg>} />
          <FooterBox title="پشتیبانی مشتریان"
            svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" x="0" y="0" viewBox="0 0 64 64"><g><g data-name="Layer 51"><path d="M32 3.43a21.52 21.52 0 0 0-21.5 21.5v1.28a1.5 1.5 0 0 0 3 0v-1.28a18.5 18.5 0 0 1 37 0v1.28a1.5 1.5 0 1 0 3 0v-1.28A21.52 21.52 0 0 0 32 3.43zM52 44.71a1.5 1.5 0 0 0-1.5 1.5A8.8 8.8 0 0 1 41.77 55h-6a1.5 1.5 0 1 0 0 3h5.89A11.8 11.8 0 0 0 53.5 46.21a1.5 1.5 0 0 0-1.5-1.5z" fill="#575D65" data-original="#000000"></path><g fill="#8CC63F"><path d="M16 24.71H8.07a5.58 5.58 0 0 0-5.57 5.58v11.85a5.58 5.58 0 0 0 5.57 5.57H16a1.5 1.5 0 0 0 1.5-1.5v-20a1.5 1.5 0 0 0-1.5-1.5zm-1.5 20H8.07a2.57 2.57 0 0 1-2.57-2.57V30.29a2.58 2.58 0 0 1 2.57-2.58h6.43zM55.93 24.71H48a1.5 1.5 0 0 0-1.5 1.5v20a1.5 1.5 0 0 0 1.5 1.5h7.93a5.58 5.58 0 0 0 5.57-5.57V30.29a5.58 5.58 0 0 0-5.57-5.58zm2.57 17.43a2.57 2.57 0 0 1-2.57 2.57H49.5v-17h6.43a2.58 2.58 0 0 1 2.57 2.58zM35.82 52.43h-7.64a1.5 1.5 0 0 0-1.5 1.5v5.14a1.5 1.5 0 0 0 1.5 1.5h7.64a1.5 1.5 0 0 0 1.5-1.5v-5.14a1.5 1.5 0 0 0-1.5-1.5zm-1.5 5.14h-4.64v-2.14h4.64z" fill="#FDCD48" data-original="#8cc63f"></path></g></g></g></svg>} />
          <FooterBox title="ارسال به سراسر کشور"
            svgIcon={<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" x="0" y="0" viewBox="0 0 64 64" ><g><g fill="#3C4652"><path d="m62.562 29.578-6.471-8.957a5.435 5.435 0 0 0-4.394-2.246H42.07V15.06a4.96 4.96 0 0 0-4.955-4.955h-26.99a2.5 2.5 0 1 0 0 5l26.945-.045v21.742a2.5 2.5 0 1 0 5 0V23.375h9.627c.135 0 .262.065.341.174l6.462 8.93.046 8.876h-4.534a7.177 7.177 0 0 0-4.851-1.89c-3.978 0-7.214 3.236-7.214 7.214 0 3.979 3.236 7.215 7.214 7.215a7.222 7.222 0 0 0 7.215-7.215c0-.109-.012-.216-.016-.324h2.186a4.96 4.96 0 0 0 4.954-4.954v-8.922a4.933 4.933 0 0 0-.938-2.901zM49.161 48.895a2.216 2.216 0 0 1-2.214-2.215c0-1.221.993-2.214 2.214-2.214 1.222 0 2.215.993 2.215 2.214s-.993 2.215-2.215 2.215zM14.839 39.466c-1.869 0-3.568.72-4.851 1.89H3a2.5 2.5 0 1 0 0 5h4.641c-.005.108-.016.215-.016.324 0 3.979 3.236 7.215 7.214 7.215s7.214-3.236 7.214-7.215c0-3.978-3.237-7.214-7.214-7.214zm0 9.429a2.216 2.216 0 0 1-2.214-2.215c0-1.221.993-2.214 2.214-2.214s2.214.993 2.214 2.214-.993 2.215-2.214 2.215z" fill="#575D65" data-original="#3c4652"></path></g><g fill="#2D7ABE"><path d="M37.214 41.356H26.786a2.5 2.5 0 1 0 0 5h10.428a2.5 2.5 0 1 0 0-5zM3 25.649h18.429a2.5 2.5 0 1 0 0-5H3a2.5 2.5 0 1 0 0 5zM7.5 33.13a2.5 2.5 0 0 0 2.5 2.5h18.429a2.5 2.5 0 0 0 0-5H10a2.5 2.5 0 0 0-2.5 2.5z" fill="#FDCD48" data-original="#2d7abe"></path></g></g></svg>} />
        </div>
        <div dir="rtl" className="grid md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center px-5 py-1">
          <FooterLink title="ارتباط با ما">
            <IconText text="کرمان، بلوار آزادگان،ابتدای خیابان علی ضیا، پوشاک سایزبزرگ زنانه آفتاب"
              textSize='body2' icon={<LocationOnOutlinedIcon />} />
            <IconText text="شماره تماس فروشگاه: ‌ ۳۲۴۷۶۴۲۳-۰۳۴"
              textSize='body2' icon={<PhoneEnabledOutlinedIcon />} />
            <IconText text="پشتیبانی (تماس، پیامرسان‌های داخلی و خارجی): ۰۹۲۰۸۴۰۸۸۹۸"
              textSize='body2' icon={<MessageIcon />} />
            <IconText text="ایمیل: info@aftabcollection.ir"
              textSize='body2' icon={<ContactMailIcon />} />
          </FooterLink>

          <FooterLink title="ما را دنبال کنید">
            <SocialNetwork iconSize='large' iconColor='mainColor' />
          </FooterLink>

          <FooterLink title="لینک‌های مفید">
            <Link to='/products'>
              <Typography component='div' variant='body2'>فروشگاه</Typography>
            </Link>
            <Link to='/about-us'>
              <Typography component='div' variant='body2'>درباره ما</Typography>
            </Link>
            <Link to='/contact-us'>
              <Typography component='div' variant='body2'>تماس با ما</Typography>
            </Link>
            <Link to='/commen-questions'>
              <Typography component='div' variant='body2'>سوالات متداول</Typography>
            </Link>
            <Link to='/privacy'>
              <Typography component='div' variant='body2'>حریم خصوصی</Typography>
            </Link>
            <Link to='/purchase-guide'>
              <Typography component='div' variant='body2'>راهنمای خرید از سایت</Typography>
            </Link>
            <a href='https://tracking.post.ir/' target='_blank'>
              <Typography component='div' variant='body2'>پیگیری مرسوله</Typography>
            </a>
          </FooterLink>

          <FooterLink title="با اطمینان خرید کنید">
            <Link target='_blank' to='https://trustseal.enamad.ir/?id=182882&Code=3KgAWwE144rL7M7oVEY4'>
              <img className='mx-auto block' src='../../../public/Image/Footer/enamad.png' />
            </Link>
          </FooterLink>
        </div>
      </Box>
    </>
  )
}