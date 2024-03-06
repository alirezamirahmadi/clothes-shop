import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

// return data
const useProduct = (id?: string) => {
  return id ? useQuery('Product/id', async () => {
    return apiRequests.get(`ProductData/${id}`).then(res => res.data);
  })
    : useQuery('Product', async () => {
      return apiRequests.get(`ProductData`).then(res => res.data);
    })
}

const useProductPagination = (currentPage?: number, perPage?: number) => {
  return useQuery(['Product', currentPage], async () => {
    return apiRequests.get(`ProductData?_page=${currentPage}&_per_page=${perPage}`).then(res => res.data);
  },
    {
      keepPreviousData: true,
    }
  )
}



export { useProduct, useProductPagination }