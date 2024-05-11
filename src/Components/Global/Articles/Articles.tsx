import { useState, useEffect } from "react";
import { Alert, Grid, useTheme, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ArticleCard from './ArticleCard';
import Pagination from "../Pagination/Pagination";
import BorderOne from "../Border/BorderOne";
import { ArticleType } from "../../../Utils/Types";
import { ArticleProp } from "../../../Utils/Types";
import { PaginationType } from "../../../Utils/Types";
import { useArticlePagination, useArticleFilter } from "../../../Hooks/ArticleHook";
import Loading from "../Loading/Loading";

export default function Articles({ filter, showPagination }: ArticleProp) {

	const [articles, setArticles] = useState<ArticleType[]>([]);
	const [pagination, setPagination] = useState<PaginationType>();
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage,] = useState(6);
	const { data, isLoading, isFetching, isError } = useArticlePagination(currentPage, perPage);
	const latestArticles = useArticleFilter('latest').data;
	const theme = useTheme();

	const createPagination = () => {
		setPagination({
			pageCount: data?.pages,
			currentPage,
			pageNoHandler,
			justifyContent: 'center',
			next: true,
			previous: true,
			first: false,
			last: false,
		})
	}

	const pageNoHandler = (pageNo: number) => {
		setCurrentPage(pageNo)
	}

	useEffect(() => {
		setArticles(data?.data);
		createPagination();
	}, [data])

	useEffect(() => {
		createPagination()
	}, [currentPage])

	if (isLoading || isFetching) {
		return (<Loading />);
	}

	if (isError) {
		return (
			<div dir='rtl'>
				<Alert variant="filled" severity="error">مشکلی در برقراری ارتباط با سرور وجود دارد</Alert>
			</div>
		)
	}

	return (
		<>
			<div>
				{articles?.length === 0 && <Alert variant="filled" severity="info">مقاله ای یافت نشد</Alert>}
				{filter === 'latest' || filter === 'popular' || filter === 'presell'
					? <Swiper spaceBetween={5} slidesPerView={1} modules={[SwiperPagination]} pagination={{ clickable: true }}
						breakpoints={{ 1280: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 550: { slidesPerView: 1 } }}>
						{latestArticles?.map((article: ArticleType) =>
							<SwiperSlide key={article.id}>
								<ArticleCard id={article.id} image={article.image} title={article.title} context={article.context} />
							</SwiperSlide>
						)}
					</Swiper>
					: <Box className="my-auto py-8">
						<BorderOne title="مقالات">
							{articles?.length === 0 && <Alert variant="filled" severity="info">مقاله ای جهت نمایش وجود ندارد</Alert>}
							<Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} >
								{articles?.map(article =>
									<Grid key={article.id} item xs={10} sm={6} md={4} lg={4}>
										<ArticleCard id={article.id} image={article.image} title={article.title} context={article.context} />
									</Grid>
								)}
							</Grid>
						</BorderOne>
					</Box>
				}
				{showPagination && pagination && <Pagination {...pagination} />}
			</div>
		</>
	)
}