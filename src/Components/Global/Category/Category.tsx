import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography, useTheme, ListSubheader, List, ListItemButton, ListItemText, Collapse } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { MenuData } from '../../../Utils/Datas';
import { SubMenuType } from '../../../Utils/Types';

export default function Category({ handleSelectCategory, closeDrawer }: { handleSelectCategory: (id: number) => void, closeDrawer?: () => void }): React.JSX.Element {
  type openCollapseType = {
    id: number,
    open: boolean
  }

  const theme = useTheme();
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState<openCollapseType[]>([]);
  const [listSelected, setListSelected] = useState(0);
  const [categories, setCategories] = useState<SubMenuType[] | undefined>([]);

  const selectCategory = (id: number) => {
    handleSelectCategory(id);
    setListSelected(id);
    closeDrawer && closeDrawer();
    navigate(`/category/${id}`);
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
    let category = MenuData.find(menu => menu.id === 2);
    category?.submenus?.map(group => {
      group && tempArray.push({ id: group.id, open: false })
    })
    setCategories(category?.submenus);
    setOpenCollapse([...tempArray]);
  }, [])
  return (
    <>
      <div dir='rtl' className="my-2 border shadow-md rounded-md">
        <List
          sx={{ width: '100%', maxWidth: 360 }}
          component="nav"
          aria-labelledby="category-menu"
          subheader={<ListSubheader sx={{ fontSize: 20, bgcolor: theme.palette.secondColor.main }} component="div" id="category-menu">دسته بندی محصولات</ListSubheader>}>
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
                            <ListItemText primary={
                              listSelected === subgroup.id ? <Typography variant='body1'>{subgroup.title}</Typography> : <Typography variant='body2'>{subgroup.title}</Typography>} />
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