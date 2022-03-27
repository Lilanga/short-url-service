import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider"
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: "70%",
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
  },
  typo: {
    marginLeft: theme.spacing(1),
    flex: 1,
    flexGrow: 1,
    textAlign: "left",
  },
  iconButton: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10vh",
  },
  divider: {
    width: '100%',
    marginTop: 10
  },
}));

export default function SuccessStatus() {
  const classes = useStyles();
  const shortUrl = useSelector((state) => state.url);
  const longUrl = useSelector((state) => state.longUrl);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(shortUrl !== '')
  },[shortUrl]);

  return (
    <div className={classes.root}>
      {
        show && <Paper className={classes.paper}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <Box className={classes.centeredBox}>
              <Typography className={classes.typo}>Long URL:</Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.centeredBox}>
                <Typography className={classes.typo}>{longUrl}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider className={classes.divider} orientation="horizontal" />
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Box className={classes.centeredBox}>
                <Typography className={classes.typo}>Short URL:</Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.centeredBox}>
                <Typography className={classes.typo}>{shortUrl}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={classes.centeredBox}>
                <IconButton
                  color="primary"
                  className={classes.iconButton}
                  aria-label="copy"
                  onClick={()=>{navigator.clipboard.writeText(shortUrl)}}
                >
                  <AssignmentIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      }
    </div>
  );
}
