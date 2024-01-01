import { TextField, styled } from '@mui/material'

const TextFieldBase = styled(TextField)`
.MuiInputBase-root{
  font-family:inherit;
  font-size:inherit;
  font-weight:inherit;
  color:inherit;
}
.MuiTextField-root{
  border-color: red;

}
`;

const TextFieldRounded50 = styled(TextFieldBase)`
.MuiInputBase-root{
  border-radius: 50px !important;
  border-color:red !important;
}
`;
export { TextFieldBase, TextFieldRounded50 }