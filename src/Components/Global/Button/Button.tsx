import { useTheme } from "@mui/material";
import { ButtonType } from "../../../Utils/Types"

export default function Button({ text, startIcon, size, clickHandler, disabled, className, classStyle = 'button-main' }: ButtonType) {

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
      buttonBackgrundColor=theme.palette.mainColor.main
      break;
      case 'button-second':
      buttonBackgrundColor=theme.palette.secondColor.main
      buttonColor = theme.palette.secondColor.contrastText
      break;
      case 'button-text':
      buttonBackgrundColor=theme.palette.textColor.contrastText
      buttonColor = theme.palette.textColor.main
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
        // className={`button ${classStyle}`}
        className={'flex justify-center ' + className + ' ' + buttonSize}
        style={{ color: buttonColor, borderColor: buttonColor, backgroundColor: buttonBackgrundColor, fontFamily:theme.typography.fontFamily }}
      >
        {startIcon}
        {text}
      </button>
    </>
  )
}