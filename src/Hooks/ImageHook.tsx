import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useImage = (id?: string) => {
  return id ? useQuery('Image/id', async () => {
    return apiRequests.get(`ImageData/${id}`).then(res => res.data);
  })
    : useQuery('Image', async () => {
      return apiRequests.get('ImageData').then(res => res.data);
    })
}



export { useImage }