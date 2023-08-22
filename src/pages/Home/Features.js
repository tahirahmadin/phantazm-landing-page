import {
  Box,
  Button,
  Card,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useState } from "react";
import theme from "../../theme";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    minHeight: 600,
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: "transparent",
    height: "100%",

    // borderBottom: "200px solid green",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 30,
      paddingBottom: 30,
      textAlign: "center",
      minHeight: 300,
    },
  },
  heading: {
    color: "white",
    textAlign: "left",
    fontSize: "2.5rem",
    fontWeight: "500",
    lineHeight: 1.4,

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
      textAlign: "center",
    },
  },
  featureCardMain: {
    backgroundColor: "#171320",
    borderRadius: 14,
    minHeight: 100,
    height: "100%",
    width: "100%",
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.down("sm")]: {
      minHeight: 300,
      height: "100%",
    },
  },
  para: {
    textAlign: "center",
    width: "70%",
    fontSize: 14,
    fontWeight: 400,
    color: "#e5e5e5",
  },
  subheading: {
    textAlign: "left",
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    color: "#f9f9f9",

    marginTop: 25,
  },
  button: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "15px 30px 15px 30px",
    fontWeight: 600,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
  buttonOutlined: {
    borderRadius: 20,
    background: `rgba(130, 71, 229, 0.7)`,
    verticalAlign: "baseline",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    margin: 0,
    marginTop: 20,
    color: "white",
    padding: "7px 30px 7px 30px",
    fontWeight: 600,
    fontSize: 14,
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  featureTitle: {
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "left",
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
      textAlign: "center",
    },
  },
  featurePara: {
    paddingTop: 7,
    fontWeight: 400,
    width: "90%",
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 30,
      width: "100%",
      textAlign: "center",
      fontSize: 14,
    },
  },

  cardTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  cardValue: {
    paddingTop: 10,
    fontWeight: 400,
    paddingLeft: "5%",
    paddingRight: "5%",
    verticalAlign: "baseline",

    margin: 0,
    fontSize: 13,
    color: "white",
    textAlign: "center",
  },
  featureCardFull: {
    width: 280,
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,
    backgroundColor: "rgba(22, 31, 48, 0.6)",
    border: "6px solid #2F3A4D",

    boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  card: {
    width: 900,
    minHeight: 120,
    height: "100%",
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid #616161",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    paddingBottom: 15,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "90%",
      padding: 5,
      height: "100%",
    },
  },
  analyticsHeading: {
    color: "#bdbdbd",
    textAlign: "left",

    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      paddingTop: 10,
      textAlign: "center",
    },
  },
  analyticsPara: {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: 700,
    textAlign: "left",

    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center",
    },
  },
  cardWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 120,

    [theme.breakpoints.down("xs")]: {
      height: "100%",

      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  videoCard: {
    width: "100%",
    height: "100%",
    maxWidth: 900,
    minHeight: 400,
    [theme.breakpoints.down("md")]: {
      minHeight: 180,
    },
  },
  videoFrame: {
    width: "100%",
    height: "30%",
    maxWidth: 900,
    minHeight: 506,
    borderRadius: 30,

    [theme.breakpoints.down("sm")]: {
      minHeight: 300,
      height: "100%",
      padding: 10,
    },
  },
}));

export default function Features() {
  const classes = useStyles();
  const [x, setX] = useState(window.innerWidth > 400 ? 0 : 0);
  const md = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{}}>
      <div
        style={{
          backgroundColor: "transaparent",
          minHeight: window.innerWidth > 400 ? 60 : 120,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: -60,
        }}
      ></div>

      <div className={classes.background}>
        <Pulse>
          <h1 className={classes.heading}>What is Phantazm</h1>
        </Pulse>
        <Box>
          <Grid container spacing={4} style={{ marginTop: 7 }} gap={2}>
            <Grid item md={6} sm={6} xs={6}>
              <Box className={classes.featureCardMain}>
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/ethereum-wallet-5533583-4623170.png"
                  height="100%"
                  style={{ borderRadius: 21, maxHeight: 140 }}
                />
                <Typography
                  variant="h5"
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#8a46ff",
                    textAlign: "left",
                    marginTop: 7,
                    marginBottom: 7,
                  }}
                >
                  Decentralized, Non-Custodial protocol
                </Typography>
                <Typography
                  variant="body3"
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#f9f9f9",
                    textAlign: "left",
                  }}
                >
                  Using AAVE as base contracts, with some magic of yield farming
                  on top, Phantazm aims to become the main liquidity hub on
                  Polygon zkEVM.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={6} gap={10}>
              <Box className={classes.featureCardMain}>
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/metaverse-polygon-matic-5355603-4474710.png?f=webp"
                  height="100%"
                  style={{ borderRadius: 21, maxHeight: 140 }}
                />
                <Typography
                  variant="h5"
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#8a46ff",
                    textAlign: "left",
                    marginTop: 7,
                    marginBottom: 7,
                  }}
                >
                  Why Polygon zkEVM ?
                </Typography>
                <Typography
                  variant="body3"
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#f9f9f9",
                    textAlign: "left",
                  }}
                >
                  We strongly believe in Polygon's vision of multichain Ethereum
                  powered by ZK. Additionaly zkEVM has the best Dev-Exp across
                  all zk Rollups - we are excited to push forward the app layer
                  of such a great infrastructure.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4} style={{ marginTop: 7 }} gap={2}>
            <Grid item md={6} sm={6} xs={6}>
              <Box className={classes.featureCardMain}>
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/balancer-8634795-6876110.png?f=webp"
                  height="100%"
                  style={{ borderRadius: 21, maxHeight: 140 }}
                />
                <Typography
                  variant="h5"
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#8a46ff",
                    textAlign: "left",
                    marginTop: 7,
                    marginBottom: 7,
                  }}
                >
                  Using Balancer for yield
                </Typography>
                <Typography
                  variant="body3"
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#f9f9f9",
                    textAlign: "left",
                  }}
                >
                  When a user interacts with Phantazm by supplying any of the 6
                  supported assets, it closely resembles the process of engaging
                  with Balancer weighted pools.{" "}
                  <a href="https://phantazm.gitbook.io/phantazm-1/v2/supplying-assets-into-lps">
                    Read more
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={6} gap={10}>
              <Box className={classes.featureCardMain}>
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/rocket-7865122-6308171.png"
                  height="100%"
                  style={{ borderRadius: 21, maxHeight: 140 }}
                />
                <Typography
                  variant="h5"
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#8a46ff",
                    textAlign: "left",
                    marginTop: 7,
                    marginBottom: 7,
                  }}
                >
                  Token launch
                </Typography>
                <Typography
                  variant="body3"
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#f9f9f9",
                    textAlign: "left",
                  }}
                >
                  So far the protocol has been entirely bootstrapped and we are
                  planning to do a public token launch. The token is designed to
                  share protocol fees i.e. giving "real yield" and utility to
                  holders in addition to governance.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* <div className={classes.container}>
          <div className="container d-md-flex align-items-center justify-content-evenly mt-5">
            <div className="col-md-3">
              {!md && (
                <h5 className={classes.featureTitle}>
                  Product <br />
                  Highlights
                </h5>
              )}
              {md && (
                <h5
                  className={classes.featureTitle}
                  style={{ marginBottom: 10 }}
                >
                  Product Highlights
                </h5>
              )}
              <Hidden smDown>
                <p className={classes.featurePara}>
                  Increase your winning odds with Artificial Intelligence
                </p>
              </Hidden>

              <Hidden smDown>
                {" "}
                <div className="mt-5">
                  <ChevronLeft
                    className={classes.icon}
                    onClick={window.innerWidth > 900 ? goLeft : goLeftMob}
                    style={{
                      backgroundColor: "#333333",
                      height: 40,
                      width: 40,
                      padding: 6,
                      borderRadius: "50%",
                      fontSize: 12,
                    }}
                  />
                  <ChevronRight
                    className={classes.icon}
                    onClick={window.innerWidth > 900 ? goRight : goRightMob}
                    style={{
                      backgroundColor: "#333333",
                      height: 40,
                      width: 40,
                      padding: 6,
                      borderRadius: "50%",
                      fontSize: 12,
                    }}
                  />
                </div>
              </Hidden>
            </div>
            <div className="col-md-9 ">
              <div className="sliderFeature">
                {[
                  <div className="slideFeature">
                    <Card className={classes.featureCardFull}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: 170 }}
                      >
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-6322971-5220353.png?f=webp"
                          height="90px"
                        />
                      </div>
                      <h5 className={classes.cardTitle}>
                        Automated Trading Strategies
                      </h5>
                      <p className={classes.cardValue}>
                        Enter the strategies by depositing the funds and let
                        strategy work for you automatically.
                      </p>
                      <div className="text-center">
                        <Button className={classes.buttonOutlined}>
                          Coming soon
                        </Button>
                      </div>
                    </Card>
                  </div>,

                  <div className="slideFeature">
                    <Card className={classes.featureCardFull}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: 170 }}
                      >
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/boost-6847514-5606144.png?f=webp"
                          height="120px"
                        />
                      </div>
                      <h5 className={classes.cardTitle}>
                        Advance DeFi
                        <br /> Staking
                      </h5>
                      <p className={classes.cardValue}>
                        Stake your tokens to get even more than what you get as
                        a staking rewards.
                      </p>
                      <div className="text-center">
                        <Button className={classes.buttonOutlined}>
                          Coming soon
                        </Button>
                      </div>
                    </Card>
                  </div>,
                  <div className="slideFeature">
                    <Card className={classes.featureCardFull}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: 170 }}
                      >
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/electric-bulb-7971760-6397909.png"
                          height="120px"
                        />
                      </div>
                      <h5 className={classes.cardTitle}>
                        Crypto Industry <br />
                        Insights
                      </h5>
                      <p className={classes.cardValue}>
                        Stay updated with latest crypto trends and news updates
                        quickly backed by crypto degens
                      </p>
                      <div className="text-center">
                        <Button className={classes.buttonOutlined}>
                          Coming soon
                        </Button>
                      </div>
                    </Card>
                  </div>,
                  <div className="slideFeature">
                    <Card className={classes.featureCardFull}>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: 170 }}
                      >
                        <img
                          src="https://cdn3d.iconscout.com/3d/premium/thumb/secure-trading-8377710-6660776.png"
                          height="90px"
                        />
                      </div>
                      <h5 className={classes.cardTitle}>
                        AI trading <br />
                        Tools
                      </h5>
                      <p className={classes.cardValue}>
                        Bringing trading tools to support your crypto token
                        trading decisions backed by advanced AI models
                      </p>
                      <div className="text-center">
                        <Button className={classes.buttonOutlined}>
                          Coming soon
                        </Button>
                      </div>
                    </Card>
                  </div>,
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="slideNew"
                      style={{ transform: `translateX(${x}%)` }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              <Hidden mdUp>
                {" "}
                <div className="mt-5">
                  <ChevronLeft
                    className={classes.icon}
                    onClick={window.innerWidth > 900 ? goLeft : goLeftMob}
                    style={{
                      backgroundColor: "#333333",
                      height: 40,
                      width: 40,
                      padding: 6,
                      borderRadius: "50%",
                      fontSize: 12,
                    }}
                  />
                  <ChevronRight
                    className={classes.icon}
                    onClick={window.innerWidth > 900 ? goRight : goRightMob}
                    style={{
                      backgroundColor: "#333333",
                      height: 40,
                      width: 40,
                      padding: 6,
                      borderRadius: "50%",
                      fontSize: 12,
                    }}
                  />
                </div>
              </Hidden>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
