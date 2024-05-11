import { useState, useEffect, useRef } from "react";
import { Alert } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination } from 'swiper/modules';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';

import type { RootState } from '../../../Redux/Store';
import Loading from "../Loading/Loading";
import ProductFilter from "./ProductFilter";
import ProductVCard from './ProductVCard';
import Pagination from "../Pagination/Pagination";
import { ProductType } from "../../../Utils/Types";
import { PaginationType } from "../../../Utils/Types";
import { ProductComponentType } from "../../../Utils/Types";
import { useProductPagination, useProduct } from "../../../Hooks/ProductHook";

export default function Products({ filter, showFilter, showPagination }: ProductComponentType): React.JSX.Element {

	const pageParams = useParams();
	const [products, setProducts] = useState<ProductType[]>([]);
	const [sortValue, setSortValue] = useState('');
	const [searchText, setSearchText] = useState('');
	const [sizeList, setSizeList] = useState<number[]>([]);
	const [pagination, setPagination] = useState<PaginationType>();
	const [currentPage, setCurrentPage] = useState<string>('1');
	const perPage = useRef(3);
	const { data, isLoading, isFetching, isError } = filter ? useProduct(filter, '') : useProductPagination(currentPage, perPage.current);
	const favoriteList = useSelector((state: RootState) => state.favorite);
	// const [searchParams,] = useSearchParams();
	// let page = searchParams.get('categoryt');
	// console.log(data);

	const createPagination = () => {
		setPagination({
			pageCount: data?.pages,
			justifyContent: 'center',
			next: true,
			previous: true,
			first: false,
			last: false,
		})
	}

	const changeSortHandler = (sortValue: string) => {
		setSortValue(sortValue);
	}

	const changeSearchHandler = (textSearch: string) => {
		setSearchText(textSearch.toLowerCase());
	}

	const handleChangeSize = (sizes: number[]) => {
		setSizeList(sizes);
	}

	const handleChangeColor = (code: string) => {

	}

	const handlePriceRanges = (priceRange: number[]) => {

	}

	useEffect(() => {
		setCurrentPage(pageParams.pageno ?? '1');
	}, [pageParams])

	useEffect(() => {
		setProducts(filter ? data : data?.data);
		createPagination();
	}, [data])

	useEffect(() => {
		createPagination()
	}, [currentPage])

	useEffect(() => {
		switch (sortValue) {
			case 'popular':
				break;
			case 'point':
				break;
			case 'latest':
				break;
			case 'expensive':
				break;
			case 'cheapest':
				break;
			default:
				break;
		}
	}, [sortValue])

	if (isLoading || isFetching) {
		return (<Loading />);
	}

	if (isError) {
		return (
			<div dir="rtl">
				<Alert variant="filled" severity="error">مشکلی در برقراری ارتباط با سرور وجود دارد</Alert>
			</div>
		)
	}

	return (
		<>
			<div dir='rtl' className="">
				<div className="m-2">
					{products?.length === 0 && <Alert variant="filled" severity="info">محصولی یافت نشد</Alert>}
					{filter === 'latest' || filter === 'popular' || filter === 'presell'
						? <Swiper spaceBetween={8} slidesPerView={1} modules={[SwiperPagination]} pagination={{ clickable: true }}
							breakpoints={{ 1280: { slidesPerView: 5 }, 1024: { slidesPerView: 4 }, 600: { slidesPerView: 3 }, 350: { slidesPerView: 2 }, 200: { slidesPerView: 1 } }}
						>
							{products?.map((product: ProductType) =>
								<SwiperSlide key={product.id}>
									<ProductVCard product={product} favoriteList={favoriteList} />
								</SwiperSlide>
							)}
						</Swiper>
						:
						<div className="flex">
							{showFilter && <div className=" hidden lg:block"><ProductFilter handleChangeSize={handleChangeSize} handleChangeColor={handleChangeColor} handleChangeSort={changeSortHandler} handleChangeSearch={changeSearchHandler} handlePriceRanges={handlePriceRanges} /></div>}
							<div className="grid mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-1 sm:gap-2 md:gap-3 xl:gap-5">
								{products?.map(product => (
									<ProductVCard key={product.id} product={product} favoriteList={favoriteList} />
								)
								)}
							</div>
						</div>
					}
					{showPagination && pagination && <Pagination {...pagination} />}
				</div>
			</div>
		</>
	)
}