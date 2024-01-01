import { useTheme, Divider, Typography } from '@mui/material'

export default function BorderTwo({title}:{title:string}):React.JSX.Element {
  const theme = useTheme();
  return (
    <>
      <Typography variant='textxl' color={theme.palette.textColor.main}>{title}</Typography>
      <Divider variant='middle' sx={{ marginTop: 2 }} />
    </>
  )
}