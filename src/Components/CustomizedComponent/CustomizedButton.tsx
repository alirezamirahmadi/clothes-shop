import { Button, Stack, Typography, styled } from '@mui/material'

const ButtonBase = styled(Button)`
padding: 2px 12px;
.MuiButton-contained  {
}
`;
const ButtonZeroPad = styled(Button)`
padding: 0px;
.MuiButton-contained  {
}
`;

const ButtonMain = ({ color, title, justifyC, clickHandler }:
  { color: string, title: string, justifyC: string, clickHandler:() => void }) => {
  return (
    <>
      <Stack spacing={2} direction="row" justifyContent={justifyC} sx={{margin:2}}>
        <ButtonBase color={color} variant="contained" onClick={clickHandler}>
          <Typography variant="button">{title}</Typography>
        </ButtonBase>
      </Stack>
    </>
  )
}
// const ButtonCounter = ({ color, title, justifyC, clickHandler }:
//   { color: string, title: string, justifyC: string, clickHandler:() => void }) => {
//   return (
//     <>
//         <ButtonZeroPad color={color} variant="contained" onClick={clickHandler}>
//           {title}
//         </ButtonZeroPad>
//     </>
//   )
// }

// const CustomizedSlider = styled((props) => (
//   <Slider slotProps={{ thumb: { className: 'thumb' } }} {...props} />
// ))`
//   color: #20b2aa;

//   :hover {
//     color: #2e8b57;
//   }

//   & .thumb {
//     border-radius: 1px;
//   }
// `;

export { ButtonBase, ButtonZeroPad, ButtonMain }