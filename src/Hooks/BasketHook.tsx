import { useQuery, useMutation } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useBasket = (customerId?: string) => {
  return customerId ? useQuery(`Basket/${customerId}`, async () => {
    return apiRequests.get(`BasketData?customerId=${customerId}`).then(res => res.data);
  })
    : useQuery('Basket', async () => {
      return apiRequests.get('BasketData').then(res => res.data);
    })
}

const useMutationBasket = (action: 'POST' | 'PUT' | 'DELETE', id?: string) => {
  return useMutation(async (body: any) => {
    switch (action) {
      case 'POST':
        return await apiRequests.post('BasketData', body);
      case 'PUT':
        return await apiRequests.put(`BasketData/${id}`, body);
      case 'DELETE':
        return await apiRequests.delete(`BasketData/${id}`);
      default:
        break;
    }
  })
}



export { useBasket, useMutationBasket }