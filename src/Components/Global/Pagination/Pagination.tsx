import { useState, useEffect } from "react";
import { Pagination as PaginationMUI, Stack } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";

import { PaginationType } from "../../../Utils/Types";

export default function Pagination({ pageCount, justifyContent = 'center', next, previous, first, last }: PaginationType) {
	// const [pageNo, setPageNo] = useState(1)
	const pageParams = useParams();
	const navigate = useNavigate();

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		navigate(`/products/${value}`);
		// pageNoHandler(value);
		// setPageNo(value);	
	};

	return (
		<Stack spacing={2} sx={{ direction: 'ltr' }}>
			<PaginationMUI count={pageCount} page={Number(pageParams.pageno)} onChange={handleChange} hidePrevButton={!previous} hideNextButton={!next} showFirstButton={first} showLastButton={last} />
		</Stack>
	)
}