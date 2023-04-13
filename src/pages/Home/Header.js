import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Telegram } from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  background: {
    minHeight: 500,
    height: "100%",
    paddingBottom: 80,
    paddingLeft: "10%",
    paddingRight: "10%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
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
    lineHeight: "70px",
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
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
}));

export default function Header() {
  const classes = useStyles();
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
                      Trade with
                      <br />
                      <span>
                        Artificial{" "}
                        <span style={{ color: "rgba(130, 71, 229, 1)" }}>
                          Intelligence
                        </span>
                      </span>
                      <br />
                      <span style={{}}>While Sleeping</span>
                    </h1>
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
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cyberspace-5553460-4639104.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
