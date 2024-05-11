import { Pagination as PaginationMUI, Stack } from '@mui/material';
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import { PaginationType } from "../../../Utils/Types";

export default function Pagination({ pageCount, next, previous, first, last }: PaginationType) {

	const pageParams = useParams();
	const navigate = useNavigate();
	const [searchParams,] = useSearchParams();

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		navigate(`/products/${value}?${searchParams}`);
	};

	return (
		<Stack spacing={2} sx={{ direction: 'ltr' }}>
			<PaginationMUI count={pageCount} page={Number(pageParams.pageno)} onChange={handleChange} hidePrevButton={!previous} hideNextButton={!next} showFirstButton={first} showLastButton={last} />
		</Stack>
	)
}