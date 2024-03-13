import { useQuery, useMutation } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useUser = (id?: string) => {
  return id ? useQuery(`User/${id}`, async () => {
    return apiRequests.get(`UserInfo?id=${id}`).then(res => res.data);
  })
    : useQuery('User', async () => {
      return apiRequests.get('UserInfo').then(res => res.data);
    })
}

const useMutationUser = (action: 'POST' | 'PUT' | 'DELETE', id?: string) => {
  return useMutation(async (body: any) => {
    switch (action) {
      case 'POST':
        return await apiRequests.post('UserInfo', body);
      case 'PUT':
        return await apiRequests.put(`UserInfo/${id}`, body);
      case 'DELETE':
        return await apiRequests.delete(`UserInfo/${id}`);
      default:
        break;
    }
  })
}



export { useUser, useMutationUser }