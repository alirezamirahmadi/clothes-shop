import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { loginType } from '../../Utils/Types'

const slice = createSlice({
  name: 'login',
  initialState: {isLogin:false, token:'', userInfo:undefined},
  reducers: {
    login: (user: loginType, action: PayloadAction<loginType>) => {
      user.isLogin = true;
      user.token = action.payload.token;
      user.userInfo = action.payload.userInfo;
    },
    logout: (user: loginType) => {
      user.isLogin = false;
      user.token = '';
      user.userInfo = undefined
    },
  }
})


export default slice.reducer;

export const {login, logout} = slice.actions;