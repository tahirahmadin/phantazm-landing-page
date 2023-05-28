import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Typography, useMediaQuery } from "@material-ui/core";
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
    paddingTop: 40,
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
  title: {
    fontWeight: 600,
    fontSize: 21,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 15,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingBottom: 3,
    },
  },
  partners: {
    paddingTop: 30,
    midth: "100%",
    maxWidth: 220,
    [theme.breakpoints.down("sm")]: {
      width: 160,
    },
  },
}));

export default function Partner() {
  const classes = useStyles();
  const md = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fragment>
      <section>
        <div className={classes.background}>
          <div className="text-center">
            {/* <h4 className={classes.heading} style={{ textAlign: "center" }}>
              Our Partner
            </h4> */}
            <div className={classes.spacing}>
              <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <Pulse>
                        <h1 className={classes.heading}>
                          We lower the costs of sourcing liquidity
                        </h1>
                      </Pulse>
                    </div>

                    <div className="d-flex row justify-content-center align-items-center w-75">
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex row justify-content-center align-items-center w-75">
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex row justify-content-center align-items-center w-75">
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex justify-content-between">
                          <div
                            style={{
                              padding: 10,
                            }}
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388c78453be2677be00f2ff_uni.svg"
                              alt="Narmis"
                              height={"auto"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-md-4 justify-content-center align-items-center">
                  <p className={classes.para}>
                    We manage liquidity of leading DeFi and Web3 protocols using
                    tailor-made strategies. These strategies aim to maximize
                    capital efficiency, reduce the cost of emissions, or
                    maintain consistent in-range liquidity with low price
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
