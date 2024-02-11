import { Typography } from "@mui/material";

export default function Off({ color }: { color: string }) {
  return (
    <>
      <Typography variant="caption" color={color}>تخفیف</Typography>
    </>
  )
}