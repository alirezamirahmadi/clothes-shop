import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Box, useTheme } from "@mui/material";
import StopIcon from '@mui/icons-material/Stop';

import { MenuData } from '../../../Utils/Datas';
import { MainMenuType } from '../../../Utils/Types';
import IconText from "../../Global/IconText/IconText";

export default function Menu({ showType, closeDrawer }: { showType: 'row' | 'col', closeDrawer?:() => void }): React.JSX.Element {
  const theme = useTheme();
  const refItemUl = useRef<HTMLUListElement>(null)
  const navigate = useNavigate()
  const [menuItems, setMenuItems] = useState<MainMenuType[]>()

  useEffect(() => {
    setMenuItems(MenuData)
  }, [])

  return (
    <>
      <Box className={"lg:ms-14 md:ms-2 my-8 w-auto " + (showType === 'row' ? 'flex' : 'border rounded-md shadow-md py-8')} sx={{ backgroundColor: theme.palette.secondColor.main }}>
        {
          menuItems?.map(main => (
            <div key={main.id} className="relative group/item">
              <div className="" onClick={closeDrawer}>
                <Link className="ms-3 " to={main.href}>
                  <Typography variant="body1" >{main.title}</Typography>
                </Link>
              </div>
              <div className="group/edit hidden group-hover/item:block absolute right-3 shadow-md border rounded-md z-10">
                <div className="flex">
                  {
                    showType === 'row' && main.submenus && main.submenus.map(sub => (
                        <ul key={sub.id} className="pe-10 ps-2 pb-4" style={{ backgroundColor: theme.palette.secondColor.main }}>
                          <li className="w-36">
                            <IconText text={sub.title} textSize="textbase" icon={<StopIcon sx={{ fontSize: 15 }} color="mainColor" />} />
                          </li>
                          {
                            sub.item && sub.item.map(item => (
                              <li key={item.id}className="ps-4 mb-1">
                                <Link to={`category/${item.id}`}>
                                  <Typography variant="body1" component='div'>{item.title}</Typography>
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </Box>
    </>
  )
}