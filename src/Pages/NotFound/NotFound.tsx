import { Typography, useTheme } from "@mui/material"


export default function NotFound(): React.JSX.Element {
  const theme = useTheme();
  return (
    <>
      <div className="flex flex-col items-center">
        <Typography variant="h5">صفحه مورد نظر شما پیدا نشد</Typography>
        <Typography variant="h2" color={theme.palette.primary.main}>404</Typography>
      </div>
    </>
  )
}