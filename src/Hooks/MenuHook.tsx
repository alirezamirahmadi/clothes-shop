import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useMenu = (id?: string) => {
  return id ? useQuery('Menu/id', async () => {
    return apiRequests.get(`MenuData/${id}`).then(res => res.data);
  })
    : useQuery('Menu', async () => {
      return apiRequests.get('MenuData').then(res => res.data);
    })
}



export { useMenu }