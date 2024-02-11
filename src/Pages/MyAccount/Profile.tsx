import { useState, useEffect } from "react"
import { useTheme, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store'

import { TextFieldBase } from "../../Components/CustomizedComponent/CutomizedTextField"
import BorderOne from "../../Components/Global/Border/BorderOne"
import Button from "../../Components/Global/Button/Button"

export default function Profile(): React.JSX.Element {
  const theme = useTheme();
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const userInfo = useSelector((state: RootState) => state.login.userInfo)

  const saveChanges = () => {

  }

  useEffect(() => {
    setFirstName(userInfo?.firstName);
    setLastName(userInfo?.lastName);
    setEmail(userInfo?.email);
  }, [])

  return (
    <>
      <BorderOne title='جزئیات حساب'>
        <div className="flex flex-wrap justify-between p-3">
          <TextFieldBase value={firstName} onChange={event => setFirstName(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
          <TextFieldBase value={lastName} onChange={event => setLastName(event.target.value)} variant="outlined" label={<Typography variant="body1" >نام خانوادگی</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
          <TextFieldBase value={email} onChange={event => setEmail(event.target.value)} variant="outlined" label={<Typography variant="body1" >آدرس ایمیل (اختیاری)</Typography>} size="small" color="mainColor" sx={{ marginTop: 2 }} />
          <Button text='ذخیره تغییرات' size='small' className="px-3 pt-1 mt-4 rounded-md" clickHandler={saveChanges} />
        </div>
      </BorderOne>
    </>
  )
}