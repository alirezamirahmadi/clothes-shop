import { useTheme } from "@mui/material";
import { ButtonType } from "../../../Utils/Types"

function Button({ text, startIcon, size, clickHandler, disabled, className, classStyle = 'button-main' }: ButtonType) {

  const theme = useTheme();
  let buttonSize: string = '';
  let buttonColor: string = '';
  let buttonBackgrundColor: string = '';

  switch (size) {
    case 'small':
      buttonSize = 'h-9 text-lg'
      break;
    case 'medium':
      buttonSize = 'h-12 text-xl'
      break;
    default:
      buttonSize = 'h-12'
      break;
  }
  switch (classStyle) {
    case 'button-main':
      buttonColor = theme.palette.mainColor.contrastText
      buttonBackgrundColor = theme.palette.mainColor.main
      break;
    case 'button-second':
      buttonBackgrundColor = theme.palette.secondColor.main
      buttonColor = theme.palette.secondColor.contrastText
      break;
    case 'button-text':
      buttonBackgrundColor = 'inherit'
      buttonColor = 'inherit'
      break;
    default:
      buttonColor = theme.palette.mainColor.main
      break;
  }
  return (
    <>
      <button
        disabled={disabled}
        onClick={clickHandler}
        className={'flex justify-center border-0 ' + className + ' ' + buttonSize}
        style={{ color: buttonColor, borderColor: buttonColor, backgroundColor: buttonBackgrundColor }}
      >
        {startIcon}
        {text}
      </button>
    </>
  )
}