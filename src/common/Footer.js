import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "200px",
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "7%",
    paddingRight: "7%",
    backgroundColor: "black",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
    textAlign: "center",
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },

  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container text-center">
        <p className={classes.para}>
          Copyright 2022 <span className={classes.highlight}>Phatazm</span>. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
}
