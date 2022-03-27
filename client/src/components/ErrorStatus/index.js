import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: '70%',
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
  },
  typo: {
    marginLeft: theme.spacing(1),
    flex: 1,
    flexGrow: 1,
    textAlign: 'left',
  },
}));

export default function ErrorStatus() {
  const classes = useStyles();
  const error = useSelector((state) => state.error);
  const errorCode = useSelector((state) => state.errorCode);

  return (
    <div className={classes.root}>
      {error && (
        <Paper className={classes.paper}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Chip label="Error" color="secondary" />
              </Grid>
              <Grid item className={classes.typo}>
                <Typography variant="subtitle1" gutterBottom>
                  {errorCode}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}
