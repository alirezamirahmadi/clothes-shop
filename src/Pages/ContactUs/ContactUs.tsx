import { useState } from 'react'
import { Box, useTheme, Divider, Typography, TextField, Button } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import MessageIcon from '@mui/icons-material/Message';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import IconText from "../../Components/Global/IconText/IconText";
import BorderOne from '../../Components/Global/Border/BorderOne'
import BorderTwo from '../../Components/Global/Border/BorderTwo'
import SocialNetwork from '../../Components/Global/SocialNetwork/SocialNetwork';

export default function ContactUs() {
  const theme = useTheme();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [comment, setComment] = useState<string>();

  const submitComment = () => { }
  return (
    <>
      <Box className="my-auto py-8" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
        <BorderOne title="تماس با ما">
          <div className="w-full h-1/2">
          </div>
          <div dir='rtl' className="md:flex px-5 py-3">
            <div className="w-1/2">
              <BorderTwo title='اطلاعات تماس' />
              <IconText text="کرمان، بلوار آزادگان،ابتدای خیابان علی ضیا، پوشاک سایزبزرگ زنانه آفتاب"
                textSize='body2' icon={<LocationOnOutlinedIcon color='primary' />} />
              <Divider variant='middle' sx={{ marginY: 1.3 }} />
              <IconText text="شماره تماس فروشگاه: ‌ ۳۲۴۷۶۴۲۳-۰۳۴"
                textSize='body2' icon={<PhoneEnabledOutlinedIcon color='primary' />} />
              <Divider variant='middle' sx={{ marginY: 1.3 }} />
              <IconText text="پشتیبانی (تماس، پیامرسان‌های داخلی و خارجی): ۰۹۲۰۸۴۰۸۸۹۸"
                textSize='body2' icon={<MessageIcon color='primary' />} />
              <Divider variant='middle' sx={{ marginY: 1.3 }} />
              <IconText text="ایمیل: info@aftabcollection.ir"
                textSize='body2' icon={<ContactMailIcon color='primary' />} />
              <Divider variant='middle' sx={{ marginTop: 1.3, marginBottom: 3 }} />
              <div className="">
                <BorderTwo title='ما را در شبکه‌های اجتماعی دنبال کنید' />
                <SocialNetwork iconSize='large' iconColor='mainColor' />
              </div>
            </div>
            <div className="w-1/2">
              <BorderTwo title='برای ما پیام بگذارید' />
              <div className="flex flex-col" >
                <TextField value={name} onChange={event => setName(event.target.value)} sx={{ marginTop: 2, borderColor: 'red' }} variant="outlined" label={<Typography variant="body2">نام *</Typography>} size="small" color="primary" />
                <TextField value={email} onChange={event => setEmail(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2">ایمیل *</Typography>} size="small" color="primary" />
                <TextField value={subject} onChange={event => setSubject(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2">موضوع *</Typography>} size="small" color="primary" />
                <TextField value={comment} onChange={event => setComment(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2">پیام شما *</Typography>} multiline rows={4} size="small" color="primary" />
              </div>
              <Button variant='contained' onClick={submitComment} sx={{mt:1}}>ارسال</Button>
            </div>
          </div>
        </BorderOne>
      </Box>
    </>
  )
}