import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Receipt } from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 35,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: "left",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
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
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  button: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginTop: 15,
    color: "#ffffff",
    padding: "15px 30px 15px 30px",
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  title: {
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  imageContainer: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      height: "100%",
    },
  },
  focusContainer: {
    border: "1px solid #888888",
    padding: 10,
    width: "100%",
    borderRadius: "7px",
    marginRight: 10,
    marginBottom: 10,
    height: 110,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
}));
export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row g-0 mt-3">
        <div className="col-md-6">
          <h6 className={classes.heading}>
            What is <strong className={classes.highlight}>POLKABRIDGE?</strong>
          </h6>
          <p className={classes.para}>
            A Multichain & Cross-Chain Decentralized All-In-One PLatform To
            Include AMM, Farming, Lending,Launchpad, Prediction, NFT, and More.
          </p>

          <Fade left>
            <div className="d-flex justify-content-center mt-3">
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>
                  <span style={{ fontSize: 18 }}>
                    {" "}
                    Multichain & Cross-Chain universe
                  </span>
                </h6>
                <p className={classes.para}>
                  Supported Ethereum, BSC, PolkaDot, Harmony, Polygon, Solana.
                </p>
              </div>
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>Deflationary mechanism</h6>
                <p className={classes.para}>
                  0.4% amount for farmer rewards and 0.1% will be burned.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>High performance</h6>
                <p className={classes.para}>UI is simple and fast.</p>
              </div>
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>Fully Audited</h6>
                <p className={classes.para}>Audited by Certik.</p>
                <a href="https://certik.org/projects/polkabridge">
                  Check report
                </a>
              </div>
            </div>
            <div className="text-left mt-3">
              <Button
                href="https://www.youtube.com/embed/nDTgKrdUCFU"
                target="_blank"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <Receipt className={classes.icon} /> Learn More
              </Button>
            </div>
          </Fade>
        </div>
        <div className="col-md-6">
          <Fade right>
            <div>
              <img
                src="images/about.png"
                alt="explain"
                className={classes.imageContainer}
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
