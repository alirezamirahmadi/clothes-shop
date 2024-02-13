
import { IconButton, Badge, Typography } from '@mui/material';
import { BadgeButtonProp } from '../../../Utils/Types';

export default function BadgeButton({ size, badgeContent, badgeColor, icon, title, className, clickHandler }: BadgeButtonProp): React.JSX.Element {
  return (
    <IconButton size={size} onClick={clickHandler} className={"flex flex-col justify-center" + className}>
        <Badge badgeContent={badgeContent} color={badgeColor} anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        >
          {icon}
        </Badge>
      <Typography variant='caption' color='primary'>{title}</Typography>
    </IconButton>
  );
}