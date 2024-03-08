import { SyncLoader } from "react-spinners";
import { useTheme } from "@mui/material";

export default function Loading(): React.JSX.Element {
  const theme = useTheme();

  return (
    <>
      <div className="w-fit mx-auto my-auto">
        <SyncLoader color={theme.palette.primary.main} />
      </div>
    </>
  )
}