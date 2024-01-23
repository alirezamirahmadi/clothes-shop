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
	const articles = useSelector((state:RootState) => state.articles);

	useEffect(() => {

	}, [articleParams])
	useEffect(() => {
		let tempArticle = articles.find((article:ArticleType) => article.id.toString() === articleParams.idArticle)
		tempArticle && setArticleInfo(tempArticle);
		setArticleOffer([...articles]);
		document.documentElement.scrollTop = 0;
	}, [articleParams])

	return (
		<>
			<Box className="my-auto pt-1" sx={{ backgroundColor: theme.palette.thirdColor.light }}>
				<BorderOne title="مقالات">
					<div className="px-3">
						<Typography variant="text2xl" color={theme.palette.textColor.main}>{articleInfo?.title}</Typography>
						<div className="flex flex-wrap">
							<IconText icon={<CalendarMonthIcon color='mainColor' />} text={articleInfo?.createDate} textSize="textsm" textColor={theme.palette.textColor.main} />
							<IconText icon={<AlarmIcon color='mainColor' />} text={"زمان پیشنهادی برای مطالعه: " + articleInfo?.studyTime} textSize="textsm" textColor={theme.palette.textColor.main} />
						</div>
					</div>
					<img className="mx-auto mt-3 mb-8" src={articleInfo?.image} alt="" />
					<p style={{color:theme.palette.textColor.main}} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleInfo ? articleInfo?.context : '') }}></p>
				</BorderOne>
				<BorderOne title='مقالات مرتبط'>
					<Articles filter='latest' showFilter={false} showPagination={false} />
				</BorderOne>
				<BorderOne title="نظرات">
					<Comments comments={[]} />
				</BorderOne>
			</Box>
		</>
	)
}