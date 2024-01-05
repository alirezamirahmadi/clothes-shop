import { Typography, useTheme } from "@mui/material"


export default function NotFound(): React.JSX.Element {
  const theme = useTheme();
  return (
    <>
      <div className="flex flex-col items-center">
        <Typography variant="text2xl" color={theme.palette.textColor.main}>صفحه مورد نظر شما پیدا نشد</Typography>
        <Typography variant="text4xl" color={theme.palette.mainColor.main}>404</Typography>
      </div>
    </>
  )
}