(() => ({
  name: 'Drawer',
  type: 'BODY_COMPONENT',
  allowedTypes: ['DRAWER_MENU', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'VERTICAL',
  jsx: <div className={classes.root}>{children}</div>,
  styles: () => () => {
    const drawerWidth = 250;

    return {
      root: {
        display: 'flex',
        height: '100vh',
        '& div.view-trail': {
          // width: `calc(100% - ${drawerWidth}px)`,
          // marginLeft: drawerWidth,
          flexGrow: 1,
        },
        '& div.drawer': {
          width: drawerWidth,
          flexShrink: 0,
          '& div.MuiDrawer-paper ': {
            width: drawerWidth,
          },
        },
      },
    };
  },
}))();
