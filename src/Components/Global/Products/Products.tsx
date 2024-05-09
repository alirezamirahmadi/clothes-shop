import { useState, useEffect, useRef } from "react";
// import { useParams } from 'react-router-dom'
import { Alert } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination } from 'swiper/modules';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../../../Redux/Store';

import 'swiper/css';
import 'swiper/css/pagination';

import Loading from "../Loading/Loading";
import ProductFilter from "./ProductFilter";
import ProductVCard from './ProductVCard';
import Pagination from "../Pagination/Pagination";
import { ProductType } from "../../../Utils/Types";
import { PaginationType } from "../../../Utils/Types";
import { ProductComponentType } from "../../../Utils/Types";
// import { getProductsFromServer } from "../../../Redux/Reducer/ProductReducer";
import { useProductPagination, useProduct } from "../../../Hooks/ProductHook";

export default function Products({ filter, showFilter, showPagination }: ProductComponentType): React.JSX.Element {
	// const { data: products } = useProduct();
	// const products = useSelector((state: RootState) => state.products);
	// const dispatch: AppDispatch = useDispatch();
	const pageParams = useParams();
	const [products, setProducts] = useState<ProductType[]>([]);
	// const [currentProducts, setCurrentProducts] = useState<ProductType[]>([]);
	// const [filterProducts, setFilterProducts] = useState<ProductType[]>([]);
	const [sortValue, setSortValue] = useState('');
	const [searchText, setSearchText] = useState('');
	const [sizeList, setSizeList] = useState<number[]>([]);
	const [pagination, setPagination] = useState<PaginationType>();
	const [currentPage, setCurrentPage] = useState<string>('1');
	const perPage = useRef(8);
	const { data, isLoading, isFetching, isError } = filter ? useProduct(filter, '') : useProductPagination(currentPage, perPage.current);
	// const { data: productFilter, isLoading: isLoadingFilter, isFetching: isFetchingFilter } = 
	const favoriteList = useSelector((state: RootState) => state.favorite);
	// const categoryParams = useParams();

	const createPagination = () => {
		setPagination({
			pageCount: data?.pages, //Math.ceil(filterProducts?.length && pageSize ? filterProducts?.length / pageSize : 1),
			// currentPage,
			// pageNoHandler,
			justifyContent: 'center',
			next: true,
			previous: true,
			first: false,
			last: false,
		})
		// let tempArray: ProductType[] = filterProducts ? [...filterProducts] : []
		// setCurrentProducts([...tempArray.splice((currentPage - 1) * pageSize, pageSize)])
	}

	// const pageNoHandler = (pageNo: number) => {
	// 	setCurrentPage(pageNo);
	// }
	const changeSortHandler = (sortValue: string) => {
		setSortValue(sortValue);
	}
	const changeSearchHandler = (textSearch: string) => {
		setSearchText(textSearch.toLowerCase());
		// setFilterProducts([...products].filter((product: ProductType) => product.title.toLowerCase().includes(textSearch)));
	}
	const handleChangeSize = (sizes: number[]) => {
		setSizeList(sizes);
	}
	const handleChangeColor = (code: string) => {

	}
	const handlePriceRanges = (priceRange: number[]) => {
		// setFilterProducts([...products].filter((product: ProductType) => product.price >= priceRange[0] && product.price <= priceRange[1]))
	}

	// useEffect(() => {
	// 	dispatch(getProductsFromServer());
	// }, [])

	useEffect(() => {
		setCurrentPage(pageParams.pageno ?? '1');
	}, [pageParams])

	useEffect(() => {
		setProducts(filter ? data : data?.data);
		createPagination();

		// setCurrentProducts(data);
		// setFilterProducts(data);
	}, [data])

	// useEffect(() => {
	// 	createPagination();
	// }, [filterProducts])

	// useEffect(() => {
	// 	categoryParams.idCategory ?
	// 		setCurrentProducts(currentProducts.filter(product => product.category.toString() === categoryParams.idCategory))
	// 		:
	// 		setCurrentProducts([...currentProducts]);
	// }, [categoryParams])

	useEffect(() => {
		createPagination()
	}, [currentPage])

	// useEffect(() => {
	// 	if (sizeList.length > 0) {
	// 		let tempArray: ProductType[] = [];
	// 		sizeList.map(size => {
	// 			tempArray = [...products].filter((product: ProductType) => product.size.filter(s => s.id === size))
	// 		})
	// 		setFilterProducts([...tempArray]);
	// 	}
	// }, [sizeList])

	useEffect(() => {
		switch (sortValue) {
			case 'popular':
				// setFilterProducts([...products]
				// 	.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
				break;
			case 'point':
				// setFilterProducts([...products].reverse()
				// 	.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
				break;
			case 'latest':
				// setFilterProducts([...products]
				// 	.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
				break;
			case 'expensive':

				break;
			case 'cheapest':

				break;
			default:
				// empty
				break;
		}
	}, [sortValue])
	// console.log('l',isLoading);
	// console.log('f',isFetching);

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
									// <ProductVCard key={product.id} id={product.id} image={product.image} title={product.title} code={product.code} price={product.price} off={product.off} />
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