import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

// return data
const useProduct = (field: string, context: string) => {

  switch (field) {
    case 'id':
      return useQuery('Product/id', async () => {
        return apiRequests.get(`ProductData/${context}`).then(res => res.data);
      })
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

  // return id ? useQuery('Product/id', async () => {
  //   return apiRequests.get(`ProductData/${id}`).then(res => res.data);
  // })
  //   : useQuery('Product', async () => {
  //     return apiRequests.get(`ProductData`).then(res => res.data);
  //   })
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