import { Hidden, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, LinkedIn, Telegram, Twitter } from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "transparent",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 42,
    fontWeight: 700,
    verticalAlign: "middle",
    wordSpacing: "0px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
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
        <h4 className={classes.heading}>Inverstors</h4>

        <div className="row flex-row justify-content-center mt-5">
          <div className={classes.investorsWrapper}>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
          </div>
        </div>
        <div className="row flex-row justify-content-center mt-5">
          <div className={classes.investorsWrapper}>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
            <div className="col-6 col-md-2" align="center">
              <Fade left>
                <div className={classes.people}>
                  <img
                    src="https://uploads-ssl.webflow.com/6387b3e41c9a003cd56eaad4/6388e54f721d3aa86f86a3d5_Vector.svg"
                    alt="Narmis"
                    className={classes.avatar}
                  />
                </div>
              </Fade>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
