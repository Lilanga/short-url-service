import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const httpModes = [
    {
      value: 'https',
      label: 'https',
    },
    {
        value: 'http',
        label: 'http',
    },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '10ch',
    },
    '& .MuiOutlinedInput-input': {
      padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    },
  },
}));

export default function HttpModes() {
  const classes = useStyles();
  const [mode, setMode] = React.useState('https');

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-mode"
          select
          value={mode}
          onChange={handleChange}
          variant="outlined"
        >
          {httpModes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}
