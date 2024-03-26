import { useQuery, useMutation } from "react-query";

import apiRequests from "../Services/AxiosConfig";
// import { useUser } from "./UserHook";

const useLogin = (token: string) => {
  // return useQuery(`Login/${token}`, async () => {
  //   return await apiRequests.get(`LoginData?token=${token}`).then(res => res.data);
  // })
  return useQuery(`Login/${token}`, async () => {
    return token ? await apiRequests.get(`LoginData?token=${token}`).then(res => res.data)
      : await apiRequests.get(`LoginData?id=-1`).then(res => res.data)
  })
}

const useMutationLogin = (action: 'POST' | 'PUT' | 'DELETE', id?: string) => {
  return useMutation(async (userInfo: any) => {
    if (!userInfo) { return }
    
    switch (action) {
      case 'POST':
        return await apiRequests.post('LoginData', { isLogin: true, token: userInfo.phone, userInfo });
      case 'PUT':
        return await apiRequests.put(`LoginData/${id}`, userInfo);
      case 'DELETE':
        return await apiRequests.delete(`LoginData/${id}`);
      default:
        break;
    }
  })
}



// export { useLogin, useMutationLogin }