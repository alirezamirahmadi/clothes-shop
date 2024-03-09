import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useMainCategory = (id?: string) => {
  return id ? useQuery('MainCategory/id', async () => {
    return apiRequests.get(`MainCategoryData/${id}`).then(res => res.data);
  })
    : useQuery('MainCategory', async () => {
      return apiRequests.get('MainCategoryData').then(res => res.data);
    })
}



export { useMainCategory }