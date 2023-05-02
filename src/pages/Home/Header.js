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
    fontSize: "52px",
    lineHeight: 1.5,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
    },
  },

  button: {
    borderRadius: 30,
    background: "rgba(130, 71, 229, 0.7)",
    padding: "12px 40px 12px 40px",
    color: "white",
    width: "fit-content",
    fontWeight: 600,
    fontSize: 15,
    marginTop: 10,
    "&:hover": {
      background: "rgba(130, 71, 229, 0.9)",
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "left",
    color: "#f9f9f9",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
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
                      Presenting
                      <br />
                      An AI Powered,
                      <br />
                      <span style={{ color: "rgba(130, 71, 229, 1)" }}>
                        Automated Trading
                      </span>
                      <br />
                      Platform
                    </h1>
                    <p className={classes.para}>
                      Join our community to get early access and free.
                    </p>

                    <div>
                      <a
                        href="https://t.me"
                        style={{ textDecoration: "none", padding: 5 }}
                      >
                        <Button className={classes.button}>
                          <Telegram style={{ marginRight: 10 }} /> Join Waitlist
                        </Button>
                      </a>
                    </div>
                  </Pulse>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/cyberspace-5553460-4639104.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
