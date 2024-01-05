import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Alert, Grid, useTheme, Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination } from 'swiper/modules';
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/Store';

import 'swiper/css';
import 'swiper/css/pagination';

import ArticleCard from './ArticleCard'
import Pagination from "../Pagination/Pagination";
import BorderOne from "../Border/BorderOne";
import { ArticleType } from "../../../Utils/Types";
import { ArticleProp } from "../../../Utils/Types";
import { PaginationType } from "../../../Utils/Types";

// import {
// 	getProductFromServer,
// 	getLatestProductFromServer,
// 	getPopularProductFromServer,
// 	getSalesProductFromServer,
// 	getCategoryProductFromServer,
// } from "../../../Redux/Reducer/Product";

export default function Articles({ filter, showFilter, showPagination }: ArticleProp) {
	const articles = useSelector((state: RootState) => state.articles);
	const [currentArticles, setCurrentArticles] = useState<ArticleType[]>([...articles]);
	const [filterArticles, setFilterArticles] = useState<ArticleType[]>([...articles]);
	const [pagination, setPagination] = useState<PaginationType>();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(6);
	const courseParams = useParams();
	const theme = useTheme();

	const createPagination = () => {
		setPagination({
			pageCount: Math.ceil(filterArticles?.length && pageSize ? filterArticles?.length / pageSize : 1),
			currentPage,
			pageNoHandler,
			justifyContent: 'center',
			next: true,
			previous: true,
			first: false,
			last: false,
		})
		let tempArray: ArticleType[] = filterArticles ? [...filterArticles] : []
		setCurrentArticles([...tempArray.splice((currentPage - 1) * pageSize, pageSize)])
	}

	const pageNoHandler = (pageNo: number) => {
		setCurrentPage(pageNo)
	}

	useEffect(() => {
		(filter === 'all' || !filter) && createPagination()
	}, [filterArticles])

	useEffect(() => {
		setCurrentArticles([...articles])
		setFilterArticles([...articles])
	}, [articles])

	useEffect(() => {
		if (filter === 'all') {
			// dispatch(getProductFromServer())
		}
		else if (filter === 'latest') {
			// dispatch(getLatestProductFromServer())
		}
		else if (filter === 'popular') {
			// dispatch(getPopularProductFromServer())
		}
		else if (filter === 'presell') {
			// dispatch(getSalesProductFromServer())
		}
		else {
			// dispatch(getCategoryCourseFromServer(courseParams.categoryName))
		}
	}, [courseParams])

	useEffect(() => {
		createPagination()
	}, [currentPage])

	return (
		<>
			{currentArticles?.length === 0 && <Alert variant="filled" severity="info" sx={{ fontFamily: theme.typography.fontFamily }}>مقاله ای جهت نمایش وجود ندارد</Alert>}
			{filter === 'latest' || filter === 'popular' || filter === 'presell'
				? <Swiper spaceBetween={5} slidesPerView={1} modules={[SwiperPagination]} pagination={{ clickable: true }}
					breakpoints={{ 1280: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 550: { slidesPerView: 1 } }}>
					{currentArticles?.map(article =>
						<SwiperSlide key={article.id}>
							<ArticleCard id={article.id} image={article.image} title={article.title} context={article.context} />
						</SwiperSlide>
					)}
				</Swiper>
				: <Box className="my-auto pt-1" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
					<BorderOne title="مقالات">
						<Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} >
							{currentArticles?.map(article =>
								<Grid key={article.id} item xs={10} sm={6} md={4} lg={4}>
									<ArticleCard id={article.id} image={article.image} title={article.title} context={article.context} />
								</Grid>
							)}
						</Grid>
					</BorderOne>
				</Box>
			}
			{showPagination && pagination && <Pagination {...pagination} />}
		</>
	)
}