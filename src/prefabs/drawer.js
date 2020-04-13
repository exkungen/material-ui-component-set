(() => ({
  name: 'Drawer',
  icon: 'PanelIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Drawer',
      options: [
        {
          label: 'Anchor',
          key: 'anchor',
          value: 'left',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'left' },
              { name: 'Top', value: 'top' },
              { name: 'Right', value: 'right' },
              { name: 'Bottom', value: 'bottom' },
            ],
          },
        },
        {
          label: 'Variant',
          key: 'variant',
          value: 'permanent',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Permanent', value: 'permanent' },
              { name: 'Persistent', value: 'persistent' },
              { name: 'Temporary', value: 'temporary' },
            ],
          },
        },
        { label: 'Open', key: 'open', value: true, type: 'TOGGLE' },
      ],
      descendants: [],
    },
  ],
}))();
