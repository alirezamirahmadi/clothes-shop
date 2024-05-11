import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';

import { SocialNetworkProp } from '../../../Utils/Types';

export default function SocialNetwork({ iconSize, iconColor }: SocialNetworkProp): React.JSX.Element {
  
  return (
    <>
      <div dir='rtl' className="flex flex-wrap px-5 py-3">
        <a href="https://instagram.com/aftabcollection?igshid=1o9e5ej40e7sp" target='_blank'>
          <IconButton size='large'>
            <InstagramIcon fontSize={iconSize} color={iconColor} />
          </IconButton>
        </a>
        <a href="https://www.pinterest.com/aftabcollection/" target='_blank'>
          <IconButton size='large'>
            <PinterestIcon fontSize={iconSize} color={iconColor} />
          </IconButton>
        </a>
        <a href="https://t.me/aftabcollection" target='_blank'>
          <IconButton size='large'>
            <TelegramIcon fontSize={iconSize} color={iconColor} />
          </IconButton>
        </a>
      </div>
    </>
  )
}