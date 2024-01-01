import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Box, useTheme } from "@mui/material";
import StopIcon from '@mui/icons-material/Stop';

import { MenuData } from '../../../Utils/Datas';
import { MainMenu as MainMenuType } from '../../../Utils/Types';
import IconText from "../../Global/IconText/IconText";

export default function Menu({ showType, closeDrawer }: { showType: 'row' | 'col', closeDrawer?:() => void }): React.JSX.Element {
  const theme = useTheme();
  const refItemUl = useRef<HTMLUListElement>(null)
  const navigate = useNavigate()
  const [menuItems, setMenuItems] = useState<MainMenuType[]>()

  useEffect(() => {
    setMenuItems(MenuData)
    // fetch(`${apiAddress}menus`)
    //   .then(response => response.json())
    //   .then(result => setNavbarItems(result))
  }, [])

  return (
    <>
      <Box className={"lg:ms-14 md:ms-2 my-8 w-auto " + (showType === 'row' ? 'flex' : 'border rounded-md shadow-md py-8')} sx={{ backgroundColor: theme.palette.secondColor.main }}>
        {
          menuItems?.map(main => (
            <div key={main.id} className="relative group/item">
              <div className="" onClick={closeDrawer}>
                <Link className="ms-3 " to={main.href}>
                  <Typography color={theme.palette.textColor.main} variant="textlg" >{main.title}</Typography>
                </Link>
              </div>
              <div className="group/edit hidden group-hover/item:block absolute right-3 shadow-md border rounded-md z-10">
                <div className="flex">
                  {
                    showType === 'row' && main.submenus && main.submenus.map(sub => (
                        <ul key={sub.id} className="pe-10 ps-2 pb-4" style={{ backgroundColor: theme.palette.secondColor.main }}>
                          <li className="w-36">
                            <IconText text={sub.title} textSize="textbase" textColor={theme.palette.textColor.main} icon={<StopIcon sx={{ fontSize: 15 }} color="mainColor" />} />
                          </li>
                          {
                            sub.item && sub.item.map(item => (
                              <li key={item.id}className="ps-4 mb-1">
                                <Link to={`category/${item.id}`}>
                                  <Typography color={theme.palette.textColor.main} variant="textsm" component='div'>{item.title}</Typography>
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




        {/* <ul className={showType === 'col' ? "flex flex-col" : 'flex justify-between'}>
          <Link className="ms-5" to='/'>
            <Typography color={theme.palette.textColor.main} variant="textlg">صفحه اصلی</Typography>
          </Link>
          {navbarItems?.map((navbarItems: MainMenuType) => (
            <li key={navbarItems.title} className="group/item w-20">
              <Link className="" to={navbarItems.href}>
                <Typography color={theme.palette.textColor.main} variant="textlg">{navbarItems.title}</Typography>
              </Link>
              {navbarItems.submenus &&
                <ul ref={refItemUl} className="group/edit hidden group-hover/item:block w-fit z-10 p-2 rounded-md border mt-1" style={{ backgroundColor: theme.palette.secondColor.main }}>
                  {navbarItems.submenus.map(item => (
                    <li key={item.title}>
                      <Link to={item.href}>
                        <Typography color={theme.palette.textColor.main} variant="textlg">{item.title}</Typography>
                      </Link>
                    </li>
                  ))}
                </ul>}
            </li>
          ))}
        </ul> */}
      </Box>
    </>
  )
}