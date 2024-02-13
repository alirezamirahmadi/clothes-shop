import { useState, useEffect } from "react";
import { Pagination as PaginationMUI, Stack } from '@mui/material';

import { PaginationType } from "../../../Utils/Types";

export default function Pagination({ pageCount, currentPage, pageNoHandler, justifyContent = 'center', next, previous, first, last }: PaginationType) {
	const [pageNo, setPageNo] = useState(1)

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		pageNoHandler(value);
		setPageNo(value);
	};

	return (
		<Stack spacing={2} sx={{ direction: 'ltr' }}>
			<PaginationMUI count={pageCount} page={pageNo} onChange={handleChange} hidePrevButton={!previous} hideNextButton={!next} showFirstButton={first} showLastButton={last} />
		</Stack>
	)
}