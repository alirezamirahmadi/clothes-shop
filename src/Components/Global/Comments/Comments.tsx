import React, { useState, useEffect } from "react";
import { Alert, Typography, Divider, Rating, Box, TextField, Button } from "@mui/material";

import { CommentType } from "../../../Utils/Types";
// import { TextFieldBase } from "../../CustomizedComponent/CutomizedTextField";
// import Button from "../Button/Button";
// import regex from "../../../Utils/Regex";

export default function Comments({ comments }: { comments: CommentType[] }): React.JSX.Element {
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [commentScore, setCommentScore] = useState<number | null>(0);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [comment, setComment] = useState<string>();

  const submitComment = () => {

  }

  useEffect(() => {
    comments && setCommentList(comments)
  }, [comments])

  return (
    <>
      <div className="border rounded-md shadow-md m-2 p-2">
        <div className="max-w-2xl">
          <Alert variant="outlined" severity="info" sx={{ marginBottom: 3 }}>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *</Alert>
          {commentList.length === 0 &&
            <Alert variant="filled" severity="info" >هنوز بررسی‌ای ثبت نشده است.</Alert>
          }
          {commentList.map(comment =>
            <div className="bg-gray-100 rounded-lg">
              <div className="p-4 mb-4">
                <div className="flex gap-4 items-center">
                  <div>
                    <p className="text-xl">{comment?.creator.firstName} {comment?.creator.lastName}</p>
                    <p className="text-sm">{comment?.date} {comment?.time}</p>
                  </div>
                </div>
                <p className="text-base my-4">{comment?.content}</p>
                {
                  comment?.answers?.map(answer => (
                    <div key={answer.id} className="bg-gray-200 rounded-lg p-4 mt-2">
                      <div className="flex gap-4 items-center">
                        <div>
                          <p className="text-lg">{answer?.creator.firstName} {answer?.creator.lastName}</p>
                          <p className="text-xs">{answer?.date} {answer?.time}</p>
                        </div>
                      </div>
                      <p className="text-sm my-4 ms-4">{answer?.content}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          )}
          <Divider variant="middle" sx={{ marginY: 2 }} />
          <div className="flex flex-col">
            <Box>
              <Rating name="simple-controlled" value={commentScore} onChange={(event, newValue) => { setCommentScore(newValue) }} />
            </Box>
            <TextField value={comment} onChange={event => setComment(event.target.value)} variant="outlined" label={<Typography variant="body2">دیدگاه شما *</Typography>} multiline rows={4} size="small" color="primary" />
            <TextField value={name} onChange={event => setName(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2">نام *</Typography>} size="small" color="primary" />
            <TextField value={email} onChange={event => setEmail(event.target.value)} sx={{ marginTop: 2 }} variant="outlined" label={<Typography variant="body2">ایمیل *</Typography>} size="small" color="primary" />
          </div>
          {/* <Button text='ارسال' size="small" className="px-4 py-1 mt-4 rounded" clickHandler={submitComment} /> */}
          <Button variant='contained' onClick={submitComment} sx={{ mt: 2 }}>ارسال</Button>
        </div>
      </div>
    </>
  )
}