import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useOrder = (id?: string) => {
  return id ? useQuery('Order/id', async () => {
    return apiRequests.get(`OrderData/${id}`).then(res => res.data);
  })
    : useQuery('Order', async () => {
      return apiRequests.get('OrderData').then(res => res.data);
    })
}



export { useOrder }