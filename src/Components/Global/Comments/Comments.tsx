import React, { useRef, useState, useEffect, useContext } from "react";
import { useTheme, Alert, Typography, Divider, Rating, Box } from "@mui/material";
// import { useParams } from 'react-router-dom'

import { CommentType } from "../../../Utils/Types";
// import AuthContext from "../../../Contexts/authContext";
import { TextFieldBase } from "../../CustomizedComponent/CutomizedTextField";
import Button from "../Button/Button";
import regex from "../../../Utils/Regex";
// import { apiAddress } from "../../../Datas";
import './Comments.css'

export default function Comments({ comments }: { comments: CommentType[] }): React.JSX.Element {
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [commentScore, setCommentScore] = useState<number | null>(0);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [comment, setComment] = useState<string>();
  const theme = useTheme();
  // const authContext = useContext(AuthContext)

  const submitComment = () => {
    // if (commentText.current.getAttribute('hasvalidation')) {
    //   const userLocalStorage = JSON.parse(localStorage.getItem('user'))
    //   const newComment = {
    //     body: commentText.current.value,
    //     courseShortName: idProduct,
    //     score: commentScore,
    //   }

    //   fetch(`${apiAddress}comments`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${userLocalStorage.token}`
    //     },
    //     body: JSON.stringify(newComment)
    //   }).then(response => response.json())
    //     .then(result => console.log(result))
    // } else {
    //   // console.log('error');
    // }
  }

  useEffect(() => {
    comments && setCommentList(comments)
  }, [comments])

  return (
    <>
      <div className="border rounded-md shadow-md m-2 p-2">
        <div className="max-w-2xl">
          <Alert variant="outlined" severity="info" sx={{ fontFamily: theme.typography.fontFamily, marginBottom: 3 }}>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *</Alert>
          {commentList.length === 0 &&
            <Alert variant="filled" severity="info" sx={{ fontFamily: theme.typography.fontFamily }}>هنوز بررسی‌ای ثبت نشده است.</Alert>
          }
          {commentList.map(comment =>
            <div key={comment.id} className="comment-show">
              <div className="comment-body">
                <p className="comment-body__creator">{comment.creator}</p>
                <p className="comment-body__text">{comment.body}</p>
              </div>
              {comment.answers &&
                <div className="comment-answer">
                  <p className="comment-answer__creator">{comment.answers.creator.name}</p>
                  <p className="comment-answer__text">{comment.answers.body}</p>
                </div>}
            </div>
          )}
          <Divider variant="middle" sx={{ marginY: 2 }} />
          <div className="flex flex-col" style={{ fontFamily: theme.typography.fontFamily, color:theme.palette.textColor.main }}>
            <Box>
              <Rating name="simple-controlled" value={commentScore} onChange={(event, newValue) => { setCommentScore(newValue) }} />
            </Box>
            <TextFieldBase value={comment} onChange={event => setComment(event.target.value)} variant="outlined" label={<Typography variant="textsm" color={theme.palette.textColor.main}>دیدگاه شما *</Typography>} multiline rows={4} size="small" color="mainColor" />
            <TextFieldBase value={name} onChange={event => setName(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="textsm" color={theme.palette.textColor.main}>نام *</Typography>} size="small" color="mainColor" />
            <TextFieldBase value={email} onChange={event => setEmail(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="textsm" color={theme.palette.textColor.main}>ایمیل *</Typography>} size="small" color="mainColor" />
          </div>
          <Button text='ارسال' size="small" className="px-4 py-1 mt-4 rounded" clickHandler={submitComment} />
        </div>
      </div>
    </>
  )
}