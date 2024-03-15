import { useQuery, useMutation } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useUser = (id?: string) => {
  return useQuery(`UserInfo/${id}`, async () => {
    return id ? await apiRequests.get(`UserInfo?id=${id}`).then(res => res.data)
      : await apiRequests.get(`UserInfo?id=-1`).then(res => res.data)
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