import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, useMediaQuery } from "@material-ui/core";
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
      fontSize: "2.0rem",
      lineHeight: 1.4,
      textAlign: "center",
    },
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  button: {
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
    color: "#bdbdbd",
    fontSize: "1rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      textAlign: "center",
      paddingTop: 10,
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
            <div className="row py-3">
              <div className="col-md-7 d-flex align-items-center">
                <div>
                  <Pulse>
                    <h1 className={classes.heading}>
                      Experience nextGen Lending Borrowing Protocol on{" "}
                      <strong>ZkEvm</strong>
                    </h1>
                    <p className={classes.para}>
                      Join our community and get experience to our beta release.
                    </p>

                    <Box className={classes.buttonWrapper}>
                      <a
                        href="https://t.me/+bSAr-pUQ93E2OTI8"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Button className={classes.button}>
                          <Telegram style={{ marginRight: 10 }} /> Join Our
                          Community
                        </Button>
                      </a>
                    </Box>
                  </Pulse>
                </div>
              </div>
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img
                  src="header-image.png"
                  height="100%"
                  style={{
                    borderRadius: 21,
                    maxHeight: 300,
                    padding: 10,
                    width: md && "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
