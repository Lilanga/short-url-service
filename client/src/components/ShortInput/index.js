import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightRoundedIcon from '@material-ui/icons/Directions';
import { useDispatch } from "react-redux";
import {generateCode} from '../../store/shortCodes'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '70%',
    margin: `${theme.spacing(12)}px auto ${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    width: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const [url, setUrl] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  function callApi() {
    if(url !== ''){
      dispatch(generateCode(url));
    }
  }

  return (
    <Paper component="form" className={classes.container}>
      <InputBase
        className={classes.input}
        placeholder="Please provide a URL to shorten"
        inputProps={{ 'aria-label': 'url to shorten' }}
        onChange={(event)=>{setUrl(event.target.value)}}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" onClick={callApi} className={classes.iconButton} aria-label="shorten">
        <ArrowRightRoundedIcon />
      </IconButton>
    </Paper>
  );
}
