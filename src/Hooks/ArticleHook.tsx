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

const useArticleFilter = (filter: string) => {
  switch (filter) {
    case 'latest':
      return useQuery('Article/latest', async () => {
        return apiRequests.get(`ArticleData?_limit=4`).then(res => res.data);
      })

    default:
      return useQuery('Article/latest', async () => {
        return apiRequests.get(`ArticleData?_limit=4`).then(res => res.data);
      })
  }
}

const useArticlePagination = (currentPage?: number, perPage?: number) => {
  return useQuery(['Article', currentPage], async () => {
    return apiRequests.get(`ArticleData?_page=${currentPage}&_per_page=${perPage}`).then(res => res.data);
  },
    {
      keepPreviousData: true,
    }
  )
}


export { useArticle, useArticlePagination, useArticleFilter }