import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

const useColor = (id?: string) => {
  return id ? useQuery('Color/id', async () => {
    return apiRequests.get(`ColorData/${id}`).then(res => res.data);
  })
    : useQuery('Color', async () => {
      return apiRequests.get('ColorData').then(res => res.data);
    })
}



export { useColor }