import { Hidden, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, LinkedIn, Telegram, Twitter } from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    minHeight: 600,
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "transparent",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  heading: {
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "center",
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
      textAlign: "center",
    },
  },
  para: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: 400,
    marginBottom: -5,
    color: "#bdbdbd",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
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

  highlight: {
    color: theme.palette.pbr.primary,
  },

  icon: {
    fontSize: 24,
    color: "#bdbdbd",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },

  avatar: {
    filter: "brightness(0) invert(1)",
    width: "140px",
  },
  avatarSmall: {
    width: "120px",
    height: "120px",
    borderRadius: 7,

    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
    },
  },
  investorsWrapper: {
    display: "flex",
    paddingLeft: 100,
    paddingRight: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    width: 1000,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));
export default function Investors() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="text-center">
        <h4 className={classes.heading}>Supported By</h4>

        <div className="d-flex justify-content-center">
          <div
            className="row flex-row justify-content-center align-items-center mt-5 px-4"
            style={{ maxWidth: 1000 }}
          >
            <div className="col-6 col-md-3 py-4" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png"
                    alt="Polygon"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-3 py-4" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://editor.analyticsvidhya.com/uploads/70500Aave-Crypto-Logo-PNG.png"
                    alt="Aave"
                    className={classes.avatar}
                    style={{ maxWidth: 120 }}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-3 py-4" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Uniswap_Logo_and_Wordmark.svg/2560px-Uniswap_Logo_and_Wordmark.svg.png"
                    alt="Uniswap"
                    className={classes.avatar}
                    style={{ maxWidth: 120 }}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-3 py-4" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://seeklogo.com/images/T/the-graph-grt-logo-29502E1E1E-seeklogo.com.png"
                    alt="GRT"
                    className={classes.avatar}
                    style={{ maxWidth: 90 }}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-3 py-4" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg"
                    alt="AWS"
                    className={classes.avatar}
                    style={{ maxWidth: 100 }}
                  />
                </div>
              </Fade>{" "}
            </div>

            <div className="col-6 col-md-3 py-4" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://moonbeam.network/wp-content/uploads/2021/05/api3-500.png"
                    alt="API3"
                    className={classes.avatar}
                    style={{ maxWidth: 100 }}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-3 py-4" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chainlink_Logo_Blue.svg/2560px-Chainlink_Logo_Blue.svg.png"
                    alt="ChainLink"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-3 py-4" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://images.web3auth.io/web3auth-logo.svg"
                    alt="Transak"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
          </div>
        </div>
        <div className="row flex-row justify-content-center align-items-center mt-5"></div>
      </div>
    </div>
  );
}
