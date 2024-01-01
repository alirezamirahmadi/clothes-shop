
import { IconButton, Badge, useTheme, Typography } from '@mui/material';
import { BadgeButtonProp } from '../../../Utils/Types';

export default function BadgeButton({ size, badgeContent, badgeColor, icon, title, className, clickHandler }: BadgeButtonProp): React.JSX.Element {
  const theme = useTheme();
  return (
    <IconButton size={size} onClick={clickHandler} className={"flex flex-col justify-center" + className}>
        <Badge badgeContent={badgeContent} color={badgeColor} sx={{ fontFamily: theme.typography.fontFamily }} anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        >
          {icon}
        </Badge>
      <Typography variant='textsm'>{title}</Typography>
    </IconButton>
  );
}