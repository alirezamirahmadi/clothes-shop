import { useState } from 'react'
import { Box, useTheme, Divider, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import MessageIcon from '@mui/icons-material/Message';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GoogleMapReact from 'google-map-react';

import IconText from "../../Components/Global/IconText/IconText";
import BorderOne from '../../Components/Global/Border/BorderOne'
import BorderTwo from '../../Components/Global/Border/BorderTwo'
import SocialNetwork from '../../Components/Global/SocialNetwork/SocialNetwork';
import Button from '../../Components/Global/Button/Button';
import { TextFieldBase } from '../../Components/CustomizedComponent/CutomizedTextField';

export default function ContactUs() {
  const theme = useTheme();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [comment, setComment] = useState<string>();

  const submitComment = () => { }
  return (
    <>
      <Box className="my-auto pt-1" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne title="تماس با ما">
          <div className="w-full h-1/2">
            {/* <GoogleMapReact bootstrapURLKeys={{ key: "Public API" }} defaultCenter={{ lat: 10.99835602, lng: 77.01502627 }} defaultZoom={11} yesIWantToUseGoogleMapApiInternals/> */}
          </div>
          <div dir='rtl' className="md:flex px-5 py-3">
            <div className="w-1/2">
              <BorderTwo title='اطلاعات تماس' />
              <IconText text="کرمان، بلوار آزادگان،ابتدای خیابان علی ضیا، پوشاک سایزبزرگ زنانه آفتاب"
                textSize='textsm' textColor={theme.palette.textColor.main} icon={<LocationOnOutlinedIcon color='mainColor' />} />
              <Divider variant='middle' sx={{ marginY: 1.3 }} />
              <IconText text="شماره تماس فروشگاه: ‌ ۳۲۴۷۶۴۲۳-۰۳۴"
                textSize='textsm' textColor={theme.palette.textColor.main} icon={<PhoneEnabledOutlinedIcon color='mainColor' />} />
              <Divider variant='middle' sx={{ marginY: 1.3 }} />
              <IconText text="پشتیبانی (تماس، پیامرسان‌های داخلی و خارجی): ۰۹۲۰۸۴۰۸۸۹۸"
                textSize='textsm' textColor={theme.palette.textColor.main} icon={<MessageIcon color='mainColor' />} />
              <Divider variant='middle' sx={{ marginY: 1.3 }} />
              <IconText text="ایمیل: info@aftabcollection.ir"
                textSize='textsm' textColor={theme.palette.textColor.main} icon={<ContactMailIcon color='mainColor' />} />
              <Divider variant='middle' sx={{ marginTop: 1.3, marginBottom: 3 }} />
              <div className="">
                <BorderTwo title='ما را در شبکه‌های اجتماعی دنبال کنید' />
                <SocialNetwork iconSize='large' iconColor='mainColor' />
              </div>
            </div>
            <div className="w-1/2">
              <BorderTwo title='برای ما پیام بگذارید' />
              <div className="flex flex-col" style={{ fontFamily: theme.typography.fontFamily, color:theme.palette.textColor.main }}>
                <TextFieldBase value={name} onChange={event => setName(event.target.value)} sx={{ marginTop: 2, borderColor:'red' }} variant="outlined" label={<Typography variant="textsm" color={theme.palette.textColor.main}>نام *</Typography>} size="small" color="mainColor" />
                <TextFieldBase value={email} onChange={event => setEmail(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="textsm" color={theme.palette.textColor.main}>ایمیل *</Typography>} size="small" color="mainColor" />
                <TextFieldBase value={subject} onChange={event => setSubject(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="textsm" color={theme.palette.textColor.main}>موضوع *</Typography>} size="small" color="mainColor" />
                <TextFieldBase value={comment} onChange={event => setComment(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="textsm" color={theme.palette.textColor.main}>پیام شما *</Typography>} multiline rows={4} size="small" color="mainColor" />
              </div>
              <Button text='ارسال' size="small" className="px-4 py-1 mt-4 rounded" clickHandler={submitComment} />
            </div>
          </div>
        </BorderOne>
      </Box>
    </>
  )
}