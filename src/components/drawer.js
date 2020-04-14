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
          // marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
        },
      },
      dev: {
        height: '100vh',
      },
    };
  },
}))();
