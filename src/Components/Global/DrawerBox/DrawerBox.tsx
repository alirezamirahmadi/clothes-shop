import React, { useState, useEffect } from 'react';
import { Box, useTheme, IconButton } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';

import { DrawerBoxProp } from '../../../Utils/Types';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function DrawerBox(props: DrawerBoxProp): React.JSX.Element {
  const [anchor, setAnchor] = useState(props.side)
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    setAnchor(props.side);
  }, [props.side])

  useEffect(() => {
    setState({ ...state, [anchor]: props.show });
  }, [props.show])

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
      if (!open) props.closeDrawer();
    };

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
      sx={{ position: 'relative' }}
    >
      <IconButton onClick={toggleDrawer(anchor, false)} sx={{ position: 'absolute', left: 0, zIndex: 10 }}>
        <CloseIcon color='textColor' />
      </IconButton>
      <Box
        sx={{ width: 'auto', display: 'block', backgroundColor: theme.palette.secondColor.main }}
        role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      >
        {props.children}
      </Box>
    </SwipeableDrawer>
  );
}