(() => ({
  name: 'FileUpload',
  icon: 'FileInputIcon',
  type: 'CONTENT_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, useText, getProperty, getActionInput } = B;
    const {
      FormControl,
      FormControlLabel,
      FormHelperText,
      Button,
      Typography,
    } = window.MaterialUI.Core;
    const {
      property,
      label,
      propertyLabelOverride,
      actionInputId,
      required,
      error,
      disabled,
      helperText,
      fullWidth,
      size,
      position,
      accept,
      margin,
    } = options;

    const isDev = env === 'dev';
    const inputRef = React.createRef();
    const [files, setFiles] = useState([]);
    const helper = useText(helperText);
    const propLabel =
      property && getProperty(property) && getProperty(property).label;
    const propLabelOverride = useText(propertyLabelOverride);
    const propertyLabelText = isDev ? '{{ property label }}' : propLabel;
    const propertyLabel = propLabelOverride || propertyLabelText;
    const labelText = property ? propertyLabel : label;
    const requiredText = required ? '*' : '';

    const actionInput = getActionInput(actionInputId);

    const handleChange = e => {
      const fileNames = Object.entries(e.target.files).map(item => {
        const value = item[1];
        return value.name;
      });
      setFiles(fileNames);
    };

    const clearFiles = e => {
      e.preventDefault();
      inputRef.current.value = null;
      setFiles([]);
    };

    const UploadComponent = (
      <div
        className={[
          classes.control,
          fullWidth ? classes.fullwidth : '',
          position === 'start' ? classes.start : '',
          position === 'end' ? classes.end : '',
        ].join(' ')}
      >
        <input
          accept={accept}
          className={classes.input}
          multiple
          name={actionInput && actionInput.name}
          type="file"
          onChange={handleChange}
          ref={inputRef}
        />
        <Button
          size={size}
          variant="contained"
          color="primary"
          component="span"
          disabled={disabled}
        >
          Upload
        </Button>
        <Typography variant="body1" noWrap className={classes.span}>
          {files.length === 0 && 'Select file(s)...'}
          {files.length === 1 && files[0]}
          {files.length > 1 && `Selected ${files.length} files`}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component="span"
          size={size}
          disabled={disabled || files.length === 0}
          onClick={clearFiles}
        >
          Cancel
        </Button>
      </div>
    );

    const Control = (
      <FormControl
        fullWidth={fullWidth}
        required={required}
        error={error}
        disabled={disabled}
        margin={margin}
      >
        <FormControlLabel
          control={UploadComponent}
          label={`${labelText}${requiredText}`}
          labelPlacement={position}
          classes={{
            root: classes.label,
          }}
        />
        {helper && <FormHelperText>{helper}</FormHelperText>}
      </FormControl>
    );
    if (inputRef && inputRef.current) {
      console.log(inputRef.current.files);
    }

    return isDev ? <div className={classes.root}>{Control}</div> : Control;
  })(),
  styles: () => () => ({
    root: {
      '& > *': {
        pointerEvents: 'none',
      },
    },
    label: {
      alignItems: ({ options: { position } }) =>
        position === 'top' || position === 'bottom'
          ? ['start', '!important']
          : 'center',
    },
    input: {
      display: 'none',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    fullwidth: {
      display: 'flex',
      width: '100%',
    },
    span: {
      flex: 1,
      textAlign: 'start',
      marginLeft: ['1rem', '!important'],
      marginRight: ['1rem', '!important'],
    },
    start: {
      marginLeft: '1rem',
    },
    end: {
      marginRight: '1rem',
    },
  }),
}))();
