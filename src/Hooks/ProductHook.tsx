import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

// return data
const useProduct = () => {
  return useQuery('Product', async () => {
    return await apiRequests.get('ProductData').then(res => res.data);
  })
}



export { useProduct }