import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useTheme, Box, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlarmIcon from '@mui/icons-material/Alarm';
import DOMPurify from 'dompurify';
import { useSelector } from "react-redux";
import type { RootState } from '../../Redux/Store';

import IconText from "../../Components/Global/IconText/IconText";
import Articles from "../../Components/Global/Articles/Articles";
import Comments from "../../Components/Global/Comments/Comments";
import BorderOne from "../../Components/Global/Border/BorderOne";
import { ArticleType } from "../../Utils/Types";

export default function ArticleInfo(): React.JSX.Element {
	const [articleInfo, setArticleInfo] = useState<ArticleType>();
	const [articleOffer, setArticleOffer] = useState<ArticleType[]>();
	const articleParams = useParams();
	const theme = useTheme();
	const articles = useSelector((state: RootState) => state.articles);

	useEffect(() => {

	}, [articleParams])
	useEffect(() => {
		let tempArticle = articles.find((article: ArticleType) => article.id.toString() === articleParams.idArticle)
		tempArticle && setArticleInfo(tempArticle);
		setArticleOffer([...articles]);
		document.documentElement.scrollTop = 0;
	}, [articleParams])

	return (
		<>
			<Box className="my-auto py-8" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
				<BorderOne title="مقالات">
					<div className="px-3">
						<Typography variant="h5">{articleInfo?.title}</Typography>
						<div className="flex flex-wrap">
							<IconText icon={<CalendarMonthIcon color='primary' />} text={articleInfo ? articleInfo.createDate : ''} textSize="body2" />
							<IconText icon={<AlarmIcon color='primary' />} text={"زمان پیشنهادی برای مطالعه: " + articleInfo?.studyTime} textSize="body2" />
						</div>
					</div>
					<img className="mx-auto mt-3 mb-8" src={articleInfo?.image} alt="" />
					<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleInfo ? articleInfo.context : '') }}></p>
				</BorderOne>
				<BorderOne title='مقالات مرتبط' className="mt-8">
					<Articles filter='latest' showFilter={false} showPagination={false} />
				</BorderOne>
				<BorderOne title="نظرات" className="mt-8">
					<Comments comments={[]} />
				</BorderOne>
			</Box>
		</>
	)
}