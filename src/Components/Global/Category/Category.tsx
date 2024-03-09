import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography, useTheme, ListSubheader, List, ListItemButton, ListItemText, Collapse } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState, AppDispatch } from '../../../Redux/Store'

// import { getMenuFromServer } from '../../../Redux/Reducer/MenuReducer';
import { SubMenuType, MainMenuType } from '../../../Utils/Types';
import { useMenu } from '../../../Hooks/MenuHook';

export default function Category({ handleSelectCategory, closeDrawer }: { handleSelectCategory: (id: number) => void, closeDrawer?: () => void }): React.JSX.Element {
  type openCollapseType = {
    id: number,
    open: boolean
  }

  const theme = useTheme();
  const {data: MenuData} = useMenu();
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState<openCollapseType[]>([]);
  const [listSelected, setListSelected] = useState(0);
  const [categories, setCategories] = useState<SubMenuType[] | undefined>([]);
  // const dispatch: AppDispatch = useDispatch();
  // const MenuData: MainMenuType[] = useSelector((state: RootState) => state.menu);

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
  // useEffect(() => {
  //   dispatch(getMenuFromServer());
  // }, [])
  
  useEffect(() => {
    let tempArray: openCollapseType[] = [];
    let category = MenuData?.find((menu:MainMenuType) => menu.id == 2);
    category?.submenus?.map((group:SubMenuType) => {
      group && tempArray.push({ id: group.id, open: false })
    })
    setCategories(category?.submenus);
    setOpenCollapse([...tempArray]);
  }, [MenuData])
  return (
    <>
      <div dir='rtl' className="my-2 border shadow-md rounded-md">
        <List
          sx={{ width: '100%', maxWidth: 360 }}
          component="nav"
          aria-labelledby="category-menu"
          subheader={<ListSubheader sx={{ fontSize: 16, bgcolor: theme.palette.secondColor.main }} component="div" id="category-menu">دسته بندی محصولات</ListSubheader>}>
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