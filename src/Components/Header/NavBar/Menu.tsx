// import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Typography, Box, useTheme } from "@mui/material";
import StopIcon from '@mui/icons-material/Stop';

import { MainMenuType } from '../../../Utils/Types';
import IconText from "../../Global/IconText/IconText";
import { useMenu } from "../../../Hooks/MenuHook";

export default function Menu({ showType, closeDrawer }: { showType: 'row' | 'col', closeDrawer?: () => void }): React.JSX.Element {
  
  const theme = useTheme();
  const { data: MenuData } = useMenu();

  return (
    <>
      <Box className={"lg:ms-14 md:ms-2 my-8 w-auto bg-white " + (showType === 'row' ? 'flex' : 'border rounded-md shadow-md py-8')}>
        {
          MenuData?.map((main: MainMenuType) => (
            <div key={main.id} className="relative group/item">
              <div onClick={closeDrawer}>
                <Link to={main.href}>
                  <Typography variant="body1" sx={{ marginInlineStart: 1.8, ":hover": { color: theme.palette.primary.main } }}>{main.title}</Typography>
                </Link>
              </div>
              <div className="group/edit hidden group-hover/item:block absolute right-3 shadow-md border rounded-md z-10 bg-white">
                <div className="flex">
                  {
                    showType === 'row' && main.submenus && main.submenus.map(sub => (
                      <ul key={sub.id} className="pe-10 ps-2 pb-4">
                        <li className="w-36">
                          <IconText text={sub.title} textSize="body1" icon={<StopIcon sx={{ fontSize: 15 }} color="primary" />} />
                        </li>
                        {
                          sub.item && sub.item.map(item => (
                            <li key={item.id} className="ps-4 mb-1">
                              <Link to={`/products/1?category=${item.id}`}>
                                <Typography variant="body2" component='div' sx={{ ":hover": { color: theme.palette.primary.main } }}>{item.title}</Typography>
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