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

export { ButtonBase, ButtonZeroPad, ButtonMain }