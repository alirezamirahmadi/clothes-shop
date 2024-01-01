import { Typography, styled } from '@mui/material'

const TypographyCenter = styled(Typography)`
& .MuiTypography-root {
  margin: '10px' !important;
}
`;

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

export {TypographyCenter}