import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useSort = (id?: string) => {
  return id ? useQuery('Sort/id', async () => {
    return apiRequests.get(`SortData/${id}`).then(res => res.data);
  })
    : useQuery('Sort', async () => {
      return apiRequests.get('SortData').then(res => res.data);
    })
}



export { useSort }