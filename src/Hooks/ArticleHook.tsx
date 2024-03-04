import { useQuery } from "react-query";

import apiRequests from "../Services/AxiosConfig";

// return data
const useArticle = (id?: string) => {
  return id ? useQuery('Article/id', async () => {
    return apiRequests.get(`ArticleData/${id}`).then(res => res.data);
  })
    : useQuery('Article', async () => {
      return apiRequests.get('ArticleData').then(res => res.data);
    })
}



export { useArticle }