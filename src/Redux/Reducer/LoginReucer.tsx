import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import { loginType } from '../../Utils/Types'
import apiRequests from '../../Services/AxiosConfig';

const getLogin = createAsyncThunk(
  'login/getLogin',
  async (token: string) => {
    const result = await apiRequests.get(`LoginData?token=${token}`);
    const loginInfo: loginType = result.data.length === 1 ? { id: result.data[0].id, isLogin: true, token, userInfo: result.data[0].userInfo } : result.data ;
    
    return loginInfo;
  }
)

const postLogin = createAsyncThunk(
  'login/postLogin',
  async (userInfo: any) => {
    await apiRequests.post('LoginData', { isLogin: true, token: userInfo.phone, userInfo });
  }
)

const logout = createAsyncThunk(
  'login/deleteLogin',
  async (loginId: string) => {
    await apiRequests.delete(`LoginData/${loginId}`);
  }
)

const initValue: loginType = { id: '', isLogin: false, token: '', userInfo: { id: '-1', firstName: '', lastName: '', province: '', city: '', address: '', phone: '', postCode: '', email: '', ePhone: '', description: '', } };

const slice = createSlice({
  name: 'login',
  initialState: initValue,
  reducers: {
    login: (user: loginType, action: PayloadAction<loginType>) => {
      user.isLogin = true;
      user.token = action.payload.token;
      user.userInfo = action.payload.userInfo;
    },
    // logout: (user: loginType) => {
    //   user.isLogin = false;
    //   user.token = '';
    //   user.userInfo = undefined
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getLogin.fulfilled, (state, action) => action.payload),
      builder.addCase(postLogin.fulfilled, (state, action) => action.payload),
      builder.addCase(logout.fulfilled, (state, action) => action.payload)
  }
})


export default slice.reducer;

// export const { login, logout } = slice.actions;

export {
  getLogin,
  postLogin,
  logout
}