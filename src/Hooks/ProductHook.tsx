import { useQuery, useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";

import apiRequests from "../Services/AxiosConfig";
import { ProductType } from "../Utils/Types";


const useProduct = (field: string, context: string) => {


  const queryClient = useQueryClient();

  switch (field) {
    case 'id':
      return useQuery(['Product', context], async () => {
        return apiRequests.get(`ProductData/${context}`).then(res => res.data);
      }
        ,
        {
          initialData: () => {
            const products: ProductType[] | undefined = queryClient.getQueryData(['Product/pagination']);

            return products?.find(product => product.id === context);
          }
        }
      )
    case 'all':
      return useQuery(`Product/all`, async () => {
        return apiRequests.get(`ProductData`).then(res => res.data);
      })
    case 'latest':
      return useQuery(`Product/${field}`, async () => {
        return apiRequests.get(`ProductData?_start=1&_limit=6`).then(res => res.data);
      })
    case 'presell':
      return useQuery(`Product/${field}`, async () => {
        return apiRequests.get(`ProductData?off_gt=0?_start=1&_limit=6`).then(res => res.data);
      })
    default:
      return useQuery(`Product/${field}`, async () => {
        return apiRequests.get(`ProductData?${field}=${context}`).then(res => res.data);
      })
  }
}

const useProductPagination = (currentPage?: string, perPage?: number) => {

  const [searchParams,] = useSearchParams();

  const addSearchParams = () => {
    return searchParams.size > 0 ? `?${searchParams}&` : '?'
  }

  return useQuery(['Product/pagination', currentPage, addSearchParams()], async () => {
    return apiRequests.get(`ProductData${addSearchParams()}_page=${currentPage}&_per_page=${perPage}`).then(res => res.data);
  })
}




export { useProduct, useProductPagination }