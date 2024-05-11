import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Typography, ListSubheader, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import type { SubMenuType, MainMenuType, openCollapseType } from '../../../Utils/Types';
import { useMenu } from '../../../Hooks/MenuHook';

export default function Category({ closeDrawer }: { closeDrawer?: () => void }): React.JSX.Element {

  const [searchParams,] = useSearchParams();
  const { data: MenuData } = useMenu();
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState<openCollapseType[]>([]);
  const [listSelected, setListSelected] = useState<string>('0');
  const [categories, setCategories] = useState<SubMenuType[] | undefined>([]);

  const selectCategory = (id: number) => {
    closeDrawer && closeDrawer();
    navigate(`/products/1?category=${id}`);
  }

  const handleOpenCollapse = (id: number) => {
    let collapse = openCollapse?.find(col => col.id === id);
    let tempArray = openCollapse?.filter(col => col.id != id);
    collapse && setOpenCollapse([...tempArray, { id, open: !collapse.open }]) //(openCollapse[index].open = !openCollapse[index].open);
  }
  const isCollapseOpen = (id: number) => {
    let collapse = openCollapse.find(col => col.id === id);
    return collapse ? collapse?.open : false
  }

  useEffect(() => {
    let tempArray: openCollapseType[] = [];
    let category = MenuData?.find((menu: MainMenuType) => menu.id == 2);
    category?.submenus?.map((group: SubMenuType) => {
      group && tempArray.push({ id: group.id, open: searchParams.get('category')?.substring(0,2) === group.id.toString() ? true : false })
    })
    setCategories(category?.submenus);
    setOpenCollapse([...tempArray]);
  }, [MenuData])

  useEffect(() => {
    setListSelected(searchParams.get('category') ?? '0');
  }, [])

  return (
    <>
      <div dir='rtl' className="my-2 border shadow-md rounded-md">
        <List
          sx={{ width: '100%', maxWidth: 360 }}
          component="nav"
          aria-labelledby="category-menu"
          subheader={<ListSubheader sx={{ fontSize: 16 }} component="div" id="category-menu">دسته بندی محصولات</ListSubheader>}>
          {
            categories?.map(group => (
              <div key={group.id} >
                <ListItemButton onClick={() => handleOpenCollapse(group.id)} sx={{ height: 30 }}>
                  <ListItemText primary={<Typography variant='body2'>{group.title}</Typography>} />
                  {group.item && (isCollapseOpen(group.id) ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {
                  group.item &&
                  <Collapse in={isCollapseOpen(group.id)} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {
                        group.item.map(subgroup => (
                          <ListItemButton key={subgroup.id} onClick={() => selectCategory(subgroup.id)} sx={{ pl: 4 }}>
                            <ListItemText primary={<Typography variant='body2' color={listSelected === subgroup.id.toString() ? 'primary' : ''}>{subgroup.title}</Typography>} />
                          </ListItemButton>
                        ))
                      }
                    </List>
                  </Collapse>
                }
              </div>
            ))
          }
        </List>
      </div>
    </>
  )
}