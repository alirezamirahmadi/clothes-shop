import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { loginType } from '../../Utils/Types'
// import apiRequests from '../../Services/AxiosConfig';

// const getLoginFromServer = createAsyncThunk(
//   'login/getLoginFromserver',
//   async (token: string) => {
//     const result = await apiRequests.get(`LoginData?token=${token}`
//     );
//     const loginInfo: loginType = { isLogin: true, token, userInfo: result.data };
//     return loginInfo;
//   }
// )

const initValue: loginType = { isLogin: false, token: '', userInfo: { id: '-1', firstName: '', lastName: '', province: '', city: '', address: '', phone: '', postCode: '', email: '', ePhone: '', description: '', } };

const slice = createSlice({
  name: 'login',
  initialState: initValue,
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
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getLoginFromServer.fulfilled, (state, action) => action.payload)
  // }
})


export default slice.reducer;

export const { login, logout } = slice.actions;

// export {
//   getLoginFromServer as getOrdersFromServer
// }