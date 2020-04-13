(() => ({
  name: 'Drawer',
  type: 'BODY_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Drawer } = window.MaterialUI.Core;
    const { anchor, variant, open } = options;
    const isDev = B.env === 'dev';
    const drawer = (
      <Drawer
        variant={variant}
        anchor={anchor}
        open={open}
        className={['drawer', classes.drawer, isDev ? classes.dev : ''].join(
          ' ',
        )}
      >
        {children.length ? children : 'Drawer'}
      </Drawer>
    );
    return isDev ? <div>{drawer}</div> : drawer;
  })(),
  styles: () => () => ({
    dev: {
      '& .MuiPaper-root': {
        position: 'static', // :-(
      },
      minHeight: '100px',
    },
  }),
}))();
