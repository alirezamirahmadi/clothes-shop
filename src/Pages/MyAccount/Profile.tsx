import { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";

import type { RootState } from '../../Redux/Store';
import BorderOne from "../../Components/Global/Border/BorderOne";

export default function Profile(): React.JSX.Element {
  
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const userInfo = useSelector((state: RootState) => state.login.userInfo);
  
  const saveChanges = () => {

  }

  useEffect(() => {
    setFirstName(userInfo?.firstName ?? '');
    setLastName(userInfo?.lastName ?? '');
    setEmail(userInfo?.email ?? '');
  }, [userInfo])

  return (
    <>
      <BorderOne title='جزئیات حساب' className="mx-auto lg:me-8 lg:ms-2">
        <div className="flex flex-wrap justify-between p-3">
          <TextField value={firstName} onChange={event => setFirstName(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام</Typography>} size="small" color="primary" sx={{ mt: 2 }} />
          <TextField value={lastName} onChange={event => setLastName(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام خانوادگی</Typography>} size="small" color="primary" sx={{ mt: 2 }} />
          <TextField value={email} onChange={event => setEmail(event.target.value)} variant="outlined" label={<Typography variant="body1" >آدرس ایمیل (اختیاری)</Typography>} size="small" color="primary" sx={{ mt: 2 }} />
          <Button variant="contained" onClick={saveChanges} sx={{ mt: 2 }}>ذخیره تغییرات</Button>
        </div>
      </BorderOne>
    </>
  )
}