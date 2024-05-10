import { useQuery, useMutation, useQueryClient } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useComment = (productId?: string) => {
  return productId ? useQuery(`Comment/${productId}`, async () => {
    return apiRequests.get(`CommentData?idProduct=${productId}`).then(res => res.data);
  })
    : useQuery('Comment', async () => {
      return apiRequests.get('CommentData').then(res => res.data);
    })
}

const useMutationComment = (action: 'POST' | 'PUT' | 'DELETE') => {

  const queryClient = useQueryClient();
  let idProduct: string = '0';

  return useMutation(async (body: any) => {
    idProduct = body.idProduct;
    switch (action) {
      case 'POST':
        return await apiRequests.post('CommentData', body);
      case 'PUT':
        return await apiRequests.put(`CommentData/${body.id}`, body);
      case 'DELETE':
        return await apiRequests.delete(`CommentData/${body.id}`);
      default:
        break;
    }
  },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`Comment/${idProduct}`)
      }
    })
}



export { useComment, useMutationComment }