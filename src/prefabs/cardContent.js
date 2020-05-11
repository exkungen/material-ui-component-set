(() => ({
  name: '@betty-blocks/material/CardContent',
  icon: 'CardContentIcon',
  category: 'CARDS',
  structure: [
    {
      name: '@betty-blocks/material/CardContent',
      options: [],
      descendants: [
        {
          name: '@betty-blocks/material/Text',
          options: [
            {
              type: 'VARIABLE',
              label: 'Content',
              key: 'content',
              value: ['Title'],
              configuration: {
                as: 'MULTILINE',
              },
            },
            {
              value: 'Title5',
              label: 'Type',
              key: 'type',
              type: 'FONT',
            },
            {
              type: 'CUSTOM',
              label: 'Text Alignment',
              key: 'textAlignment',
              value: 'left',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Left', value: 'left' },
                  { name: 'Center', value: 'center' },
                  { name: 'Right', value: 'right' },
                ],
              },
            },
            {
              value: ['0rem', '0rem', '0rem', '0rem'],
              label: 'Outer space',
              key: 'outerSpacing',
              type: 'SIZES',
            },
          ],
          descendants: [],
        },
        {
          name: '@betty-blocks/material/Text',
          options: [
            {
              type: 'VARIABLE',
              label: 'Content',
              key: 'content',
              value: ['Type your content here...'],
              configuration: {
                as: 'MULTILINE',
              },
            },
            {
              value: 'Body2',
              label: 'Type',
              key: 'type',
              type: 'FONT',
            },
            {
              type: 'CUSTOM',
              label: 'Text Alignment',
              key: 'textAlignment',
              value: 'left',
              configuration: {
                as: 'BUTTONGROUP',
                dataType: 'string',
                allowedInput: [
                  { name: 'Left', value: 'left' },
                  { name: 'Center', value: 'center' },
                  { name: 'Right', value: 'right' },
                ],
              },
            },
            {
              value: ['0rem', '0rem', '0rem', '0rem'],
              label: 'Outer space',
              key: 'outerSpacing',
              type: 'SIZES',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
