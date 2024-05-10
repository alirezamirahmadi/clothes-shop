import React, { useState } from "react";
import { Alert, Typography, Divider, Rating, Box, TextField, Button, IconButton } from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import { CommentType } from "../../../Utils/Types";
import { useComment, useMutationComment } from "../../../Hooks/CommentHook";
import Loading from "../Loading/Loading";
import { getTime, getDate } from "../../../Utils/Functions";
// import { TextFieldBase } from "../../CustomizedComponent/CutomizedTextField";
// import Button from "../Button/Button";
// import regex from "../../../Utils/Regex";

export default function Comments({ idProduct }: { idProduct: string }): React.JSX.Element {
  // const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [commentScore, setCommentScore] = useState<number | null>(0);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [content, setContent] = useState<string>();
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [selectComment, setSelectComment] = useState<CommentType>();
  const { data: commentList, isLoading, isFetching, isError } = useComment(idProduct);
  const { mutate: addToComments, isSuccess } = useMutationComment('POST');
  const { mutate: addAnswerToComment, isSuccess: isAnswerSuccess } = useMutationComment('PUT');

  const emptyTextField = () => {
    setName('');
    setEmail('');
    setContent('');
  }

  const submitComment = () => {
    !isAnswer && addToComments({
      idProduct,
      content,
      creator: { name, email },
      date: getDate(),
      time: getTime(),
      answers: []
    })

    if (isAnswer && selectComment?.answers) {
      addAnswerToComment({
        ...selectComment, answers: [...selectComment?.answers, {
          id: selectComment.answers.length + 1,
          content,
          creator: { name, email },
          date: getDate(),
          time: getTime(),
        }]
      });
      setIsAnswer(false)
    }

    (isSuccess || isAnswerSuccess) && emptyTextField();
  }

  const submitAnswer = (comment: CommentType) => {
    setSelectComment(comment);
    setIsAnswer(true);
  }
  const cancelAnswer = () => {
    setIsAnswer(false);
  }

  // useEffect(() => {
  //   comments && setCommentList(comments)
  // }, [comments])

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
      <div className="border rounded-md shadow-md m-2 p-2">
        <div className="max-w-2xl">
          <Alert variant="outlined" severity="info" sx={{ marginBottom: 3 }}>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *</Alert>
          {commentList.length === 0 &&
            <Alert variant="filled" severity="info" >هنوز بررسی‌ای ثبت نشده است.</Alert>
          }
          {commentList.map((comment: CommentType) =>
            <div className="bg-gray-100 rounded-lg text-right">
              <div className="p-4 mb-4">
                <div className="flex justify-between">
                  <div>
                    <Typography variant="h6">{comment?.creator.name}</Typography>
                    <Typography variant="body2">{comment?.date} {comment?.time}</Typography>
                  </div>
                  <IconButton onClick={() => submitAnswer(comment)}>
                    <QuestionAnswerIcon color="primary" />
                  </IconButton>
                </div>
                <Typography variant="body1">{comment?.content}</Typography>
                {
                  comment?.answers?.map(answer => (
                    <div key={answer.id} className="bg-gray-200 rounded-lg p-4 mt-2">
                      <div>
                        <Typography variant="h6">{answer?.creator.name}</Typography>
                        <Typography variant="body2">{answer?.date} {answer?.time}</Typography>
                      </div>
                      <Typography variant="body1">{answer?.content}</Typography>
                    </div>
                  ))
                }
              </div>
            </div>
          )}
          <Divider variant="middle" sx={{ marginY: 2 }} />
          <div className="flex flex-col">
            {isAnswer &&
              <div className="flex items-center">
                <Typography variant="body2">در پاسخ به </Typography>
                <Typography variant="h6">{selectComment?.creator.name}</Typography>
                <Button variant='text' onClick={cancelAnswer}>لغو</Button>
              </div>
            }
            <Box>
              <Rating name="simple-controlled" value={commentScore} onChange={(event, newValue) => { setCommentScore(newValue) }} />
            </Box>
            <TextField value={content} onChange={event => setContent(event.target.value)} variant="outlined" label={<Typography variant="body2">دیدگاه شما *</Typography>} multiline rows={4} size="small" color="primary" />
            <TextField value={name} onChange={event => setName(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2">نام *</Typography>} size="small" color="primary" />
            <TextField value={email} onChange={event => setEmail(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2">ایمیل *</Typography>} size="small" color="primary" />
          </div>
          <Button variant='contained' onClick={submitComment} sx={{ mt: 2, mr: 1 }}>ارسال</Button>
        </div>
      </div>
    </>
  )
}