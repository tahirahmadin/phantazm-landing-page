import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, useMediaQuery } from "@material-ui/core";
import { Telegram } from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  background: {
    minHeight: 500,
    height: "100%",
    paddingBottom: 80,
    paddingLeft: "10%",
    paddingRight: "10%",

    [theme.breakpoints.down("sm")]: {
      height: "100%",
      paddingTop: "10%",
    },
  },
  spacing: {
    paddingTop: 140,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
      textAlign: "center",
    },
  },

  heading: {
    color: "white",
    width: "auto",
    textAlign: "left",
    lineHeight: 1.2,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    fontSize: "3.75rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
    },
  },

  button: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    cursor: "pointer",
    backgroundImage: "linear-gradient(#8a46ff,#6e38cc)",
    borderRadius: "3rem",
    padding: "10px 20px 10px 14px",
    fontSize: ".85rem",
    fontWeight: 500,
    textDecoration: "none",
    transition: "all .2s",
    position: "relative",
    textTransform: "capitalize",

    "&:hover": {
      background: "rgba(130, 71, 229, 0.9)",
    },
  },
  para: {
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: ".4px",
    textAlign: "left",
    color: "#67666e",
    fontSize: "1rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const md = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fragment>
      <section>
        <div className={classes.background}>
          <div className={classes.spacing}>
            <div className="row">
              <div className="col-md-7 d-flex align-items-center">
                <div>
                  <Pulse>
                    <h1 className={classes.heading}>
                      {/* Enhance your trading journey with our nextGen AI Trading
                      Platform */}
                      Take profits to sky with our next-Gen AI Trading Platform
                    </h1>
                    <p className={classes.para}>
                      Join our community and experience to our intelligent
                      trading platform.
                    </p>

                    <div>
                      <a
                        href="https://t.me/sleepswapio"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button className={classes.button}>
                          <Telegram style={{ marginRight: 10 }} /> Join Waitlist
                        </Button>
                      </a>
                    </div>
                  </Pulse>
                </div>
              </div>
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img src="accumulation.png" style={{ maxWidth: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
