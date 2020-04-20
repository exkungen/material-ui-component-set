(() => ({
  name: 'Drawer',
  type: 'BODY_COMPONENT',
  allowedTypes: [
    'DRAWER_MENU',
    'BODY_COMPONENT',
    'CONTAINER_COMPONENT',
    'CONTENT_COMPONENT',
  ],
  orientation: 'VERTICAL',
  jsx: (() => {
    const isDev = B.env === 'dev';
    return (
      <div className={[classes.root, isDev && classes.dev].join(' ')}>
        {children}
        <div className={classes.content}>content</div>
      </div>
    );
  })(),
  styles: () => () => {
    const drawerWidth = 250;

    return {
      root: {
        display: 'flex',
        '&> .MuiAppBar-root': {
          backgroundColor: 'black',
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
        },
        '&> div:first-child': {
          position: 'fixed',
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        '&> .MuiDrawer-root > .MuiDrawer-paper': {
          width: drawerWidth,
        },
        '&> div:nth-of-type(2) > .MuiDrawer-root > .MuiDrawer-paper': {
          width: drawerWidth,
        },
      },
      content: {
        marginLeft: drawerWidth,
        paddingTop: '90px',
        width: `calc(100% - ${drawerWidth}px)`,
      },
      dev: {
        height: '100vh',
      },
    };
  },
}))();
