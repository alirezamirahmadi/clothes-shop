import { useQuery, useMutation } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useFavorite = (customerId?: string) => {
  return customerId ? useQuery(`Favorite/${customerId}`, async () => {
    return apiRequests.get(`FavoriteData?customerId=${customerId}`).then(res => res.data);
  })
    : useQuery('Favorite', async () => {
      return apiRequests.get('FavoriteData').then(res => res.data);
    })
}

const useMutationFavorite = (action: 'POST' | 'PUT' | 'DELETE', id?: string) => {
  return useMutation(async (body: any) => {
    switch (action) {
      case 'POST':
        return await apiRequests.post('FavoriteData', body);
      case 'PUT':
        return await apiRequests.put(`FavoriteData/${id}`, body);
      case 'DELETE':
        return await apiRequests.delete(`FavoriteData/${id}`);
      default:
        break;
    }
  })
}



export { useFavorite, useMutationFavorite }