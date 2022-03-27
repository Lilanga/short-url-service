import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#626262",
       paddingRight: "40px",
       paddingLeft: "40px",
       marginBlockEnd: "160px",
    },
 }));

export default function Header() {

    const { header } = useStyles();
  const headerSection = () => {
    return (
    <Toolbar>
        <Typography variant="h6" component="h1">
            Short.ly | URL shortner
        </Typography>
    </Toolbar>
    );
  };

  return (
    <header>
      <AppBar  className={header}>{headerSection()}</AppBar>
    </header>
  );
}
