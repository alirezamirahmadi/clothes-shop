import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useSize = (id?: string) => {
  return id ? useQuery('Size/id', async () => {
    return apiRequests.get(`SizeData/${id}`).then(res => res.data);
  })
    : useQuery('Size', async () => {
      return apiRequests.get('SizeData').then(res => res.data);
    })
}



export { useSize }