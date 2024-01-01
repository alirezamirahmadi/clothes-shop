import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Alert, useTheme } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination as SwiperPagination } from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../../../Redux/Store'

import 'swiper/css';
import 'swiper/css/pagination';

import ProductFilter from "./ProductFilter";
import ProductVCard from './ProductVCard'
import Pagination from "../Pagination/Pagination";
import { ProductType } from "../../../Utils/Types";
import { PaginationType } from "../../../Utils/Types";
 
import {
	addProduct,
	getProductFromServer,
	getLatestProductFromServer,
	getPopularProductFromServer,
	getSalesProductFromServer,
	getCategoryProductFromServer,
} from "../../../Redux/Reducer/ProductReducer";
import { ProductComponentType } from "../../../Utils/Types";

export default function Products({ filter, showFilter, showPagination }: ProductComponentType): React.JSX.Element {
	const products = useSelector((state: RootState) => state.products)
	const [currentProducts, setCurrentProducts] = useState<ProductType[]>([...products]);
	const [filterProducts, setFilterProducts] = useState<ProductType[]>([...products]);
	const [sortValue, setSortValue] = useState('');
	const [searchText, setSearchText] = useState('');
	const [sizeList, setSizeList] = useState<number[]>([]);
	const [pagination, setPagination] = useState<PaginationType>();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(6);
	const categoryParams = useParams();
	const theme = useTheme();
	const dispatch: AppDispatch = useDispatch();

	const createPagination = () => {
		setPagination({
			pageCount: Math.ceil(filterProducts?.length && pageSize ? filterProducts?.length / pageSize : 1),
			currentPage,
			pageNoHandler,
			justifyContent: 'center',
			next: true,
			previous: true,
			first: false,
			last: false,
		})
		let tempArray: ProductType[] = filterProducts ? [...filterProducts] : []
		setCurrentProducts([...tempArray.splice((currentPage - 1) * pageSize, pageSize)])
	}

	const pageNoHandler = (pageNo: number) => {
		setCurrentPage(pageNo);
	}
	const changeSortHandler = (sortValue: string) => {
		setSortValue(sortValue);
	}
	const changeSearchHandler = (textSearch: string) => {
		setSearchText(textSearch.toLowerCase());
		setFilterProducts([...products].filter((product: ProductType) => product.title.toLowerCase().includes(textSearch)));
	}
	const handleChangeSize = (sizes: number[]) => {
		setSizeList(sizes);
	}
	const handleChangeColor = (code: number) => {
		// console.log(code);
	}
	const handlePriceRanges = (priceRange: number[]) => {
		setFilterProducts([...products].filter((product: ProductType) => product.price >= priceRange[0] && product.price <= priceRange[1]))
	}

	useEffect(() => {
		// (filter === 'all' || !filter) && createPagination()
		createPagination();
	}, [filterProducts])

	useEffect(() => {
		setCurrentProducts([...products])
	}, [products])
	// useEffect(() => {
	// 	setPageSize(7)
	// 	// setFilterProducts([...products])

	// 	// dispatch(addProduct(ProductData[0]))

	// }, [currentProducts])

	useEffect(() => {
		categoryParams.idCategory ?
			setCurrentProducts(currentProducts.filter(product => product.category.toString() === categoryParams.idCategory))
			:
			setCurrentProducts([...currentProducts]);


		// if (filter === 'all') {
		// 	// dispatch(getProductFromServer())
		// }
		// else if (filter === 'latest') {
		// 	// dispatch(getLatestProductFromServer())
		// }
		// else if (filter === 'popular') {
		// 	// dispatch(getPopularProductFromServer())
		// }
		// else if (filter === 'presell') {
		// 	// dispatch(getSalesProductFromServer())
		// }
		// else {
		// 	// dispatch(getCategoryCourseFromServer(courseParams.categoryName))
		// }
	}, [categoryParams])

	useEffect(() => {
		createPagination()
	}, [currentPage])

	useEffect(() => {
		if (sizeList.length > 0) {
			let tempArray: ProductType[] = [];
			sizeList.map(size => {
				tempArray = [...products].filter((product: ProductType) => product.size.filter(s => s.id === size))
			})
			setFilterProducts([...tempArray]);
		}
	}, [sizeList])

	// useEffect(() => {
	// 	if (searchText.length > 0) {
	// 		setFilterProducts([...products]
	// 			.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
	// 	} else {
	// 		setCurrentProducts([...products])
	// 	}
	// }, [searchText])

	useEffect(() => {
		switch (sortValue) {
			case 'popular':
				setFilterProducts([...products]
					.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
				break;
			case 'point':
				setFilterProducts([...products].reverse()
					.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
				break;
			case 'latest':
				setFilterProducts([...products]
					.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
				break;
			case 'expensive':
				// setFilterProducts(products.filter(course => course.price != 0)
				// 	.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
				break;
			case 'cheapest':
				// setFilterProducts(products.filter(course => course.price != 0)
				// 	.filter((product: ProductType) => product.title.toLowerCase().includes(searchText)))
				break;
			default:
				// empty
				break;
		}
	}, [sortValue])

	return (
		<>
			<div dir='rtl' className="">
				<div className="m-2">
					{currentProducts?.length === 0 && <Alert variant="filled" severity="info" sx={{ fontFamily: theme.typography.fontFamily }}>محصولی یافت نشد</Alert>}
					{filter === 'latest' || filter === 'popular' || filter === 'presell'
						? <Swiper spaceBetween={0} slidesPerView={1} modules={[SwiperPagination]} pagination={{ clickable: true }}
							breakpoints={{ 1280: { slidesPerView: 5 }, 1024: { slidesPerView: 4 }, 600: { slidesPerView: 3 }, 350: { slidesPerView: 2 }, 200: { slidesPerView: 1 } }}
						>
							{currentProducts?.map(product =>
								<SwiperSlide key={product.id}>
									<ProductVCard id={product.id} image={product.image} title={product.title} code={product.code} size={product.size} color={product.color} price={product.price} off={product.off} />
								</SwiperSlide>
							)}
						</Swiper>
						:
						<div className="flex">
							{showFilter && <div className=" hidden lg:block"><ProductFilter handleChangeSize={handleChangeSize} handleChangeColor={handleChangeColor} handleChangeSort={changeSortHandler} handleChangeSearch={changeSearchHandler} handlePriceRanges={handlePriceRanges} /></div>}
							<div className="grid mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-0 sm:gap-1">
								{currentProducts?.map(product => (
									<ProductVCard key={product.id} id={product.id} image={product.image} title={product.title} code={product.code} size={product.size} color={product.color} price={product.price} off={product.off} />
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