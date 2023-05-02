import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 130,
    paddingBottom: 130,
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "transparent",
    height: "100%",

    // borderBottom: "200px solid green",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  container: {
    marginTop: 0,
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
    borderRadius: 10,
    background: `transparent`,
    border: "1px solid #E0077D",
    verticalAlign: "baseline",
    margin: 0,
    marginTop: 20,
    color: "#E0077D",
    padding: "7px 30px 7px 30px",
    fontWeight: 600,
    fontSize: 14,

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
  title: {
    fontWeight: 700,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 42,
    color: "white",
    textAlign: "center",
  },
  para: {
    paddingTop: 7,
    fontWeight: 400,

    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },

  cardTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 16,
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

  featurePara: {
    paddingLeft: 5,
    fontWeight: 400,
    width: "90%",
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 15,
    color: "white",
    textAlign: "left",
  },
  quarterTitle: {
    fontWeight: 600,
    verticalAlign: "baseline",
    margin: 0,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  li: {
    color: "#bdbdbd",
    fontSize: 14,
    marginTop: 20,
    paddingLeft: 10,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      fontSize: 12,
    },
  },
  liActive: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 10,
    paddingLeft: 10,
    textAlign: "left",

    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      fontSize: 13,
    },
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: "#ffffff",
  },
  card: {
    padding: 10,
    width: "100%",
    width: 280,
    marginTop: 20,
    height: "fit-content",
    paddingBottom: 20,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.1)",
    border: "2px solid #2F3A4D",
    boxShadow: "0px 50px 200px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: 5,
      paddingRight: 5,
      width: "100%",
      height: "100%",
      maxWidth: 240,
    },
  },
  cardActive: {
    padding: 10,
    width: 300,
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,
    backgroundColor: "#161F30",
    border: "5px solid #bdbdbd",
    boxShadow: "0px 50px 200px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: 5,
      paddingRight: 5,
      width: "100%",
      height: "100%",
      maxWidth: 250,
    },
  },
  cardWrapper: {
    width: "100%",
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,

    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: 5,
      paddingRight: 5,
      width: "100%",
      height: "100%",
      maxWidth: 250,
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
      paddingRight: 5,
      width: "100%",
      height: "100%",
    },
  },
  ActiveCardWrapper: {
    width: 300,
    height: "100%",
    paddingBottom: 20,
    borderRadius: 30,

    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
      paddingRight: 5,
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: 5,
      paddingRight: 5,
      width: "100%",
      height: "100%",
      maxWidth: 250,
    },
  },
}));

export default function RoadmapNew() {
  const classes = useStyles();
  const [x, setX] = useState(window.innerWidth > 950 ? 0 : -100);

  const goRight = () => {
    x === -100 * ([1, 2, 3].length - 3) ? setX(0) : setX(x - 100);
  };
  const goLeft = () => {
    x === 0 ? setX(0) : setX(x + 100);
  };

  const goRightMob = () => {
    x === -100 * [1, 2, 3].length ? setX(0) : setX(x - 100);
  };
  const goLeftMob = () => {
    x === 0 ? setX(0) : setX(x + 100);
  };

  return (
    <div className={classes.background}>
      <h5 className={classes.title}>Roadmap</h5>
      <p className={classes.para}>
        Gearing up to revolutionize the automation in blockchain industry.
      </p>
      <div
        className="container d-flex justify-content-around"
        style={{ paddingTop: 70 }}
      >
        <div
          style={{
            height: window.innerWidth > 900 ? 430 : 320,
            display: "flex",
            alignItems: "center",
          }}
        >
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
        </div>

        <div className="sliderNew">
          {[
            <div className={classes.cardWrapper}>
              <h5 className={classes.quarterTitle}>Q2 - 2023</h5>
              <Card className={classes.card}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/delivery-box-5340240-4465979.png"
                    height="80px"
                  />
                </div>
                <h5 className={classes.cardTitle}>MVP Ready</h5>
                <div className="mt-3">
                  <li className={classes.li}>
                    Minimum viable product is ready
                  </li>
                  <li className={classes.li}>
                    Preparing for IDO launch & raising funds.
                  </li>
                </div>
              </Card>{" "}
            </div>,
            <div className={classes.cardWrapper}>
              <h5 className={classes.quarterTitle}>Q3 - 2023</h5>
              <Card className={classes.card}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/dollar-coin-4604543-3816872.png?f=webp"
                    height="80px"
                  />
                </div>
                <h5 className={classes.cardTitle}>Token Launch</h5>
                <div className="mt-3">
                  <li className={classes.li}>
                    Token launch at top IDO platforms
                  </li>
                  <li className={classes.li}>
                    Testnet release on Polygon testnet
                  </li>
                </div>
              </Card>{" "}
            </div>,
            <div className={classes.cardWrapper}>
              <h5 className={classes.quarterTitle}>Q4 - 2023</h5>
              <Card className={classes.card}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: 120 }}
                >
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/business-startup-5825143-4874125.png?f=webp"
                    height="80px"
                  />
                </div>
                <h5 className={classes.cardTitle}>Mainnet Release</h5>
                <div className="mt-3">
                  <li className={classes.li}>
                    Releasing mainnet for atleast 5 strategies.
                  </li>
                  <li className={classes.li}>
                    Listing token on Top exchanges.
                  </li>
                </div>
              </Card>{" "}
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
        <div
          style={{
            height: window.innerWidth > 900 ? 430 : 320,
            display: "flex",
            alignItems: "center",
          }}
        >
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
      </div>
    </div>
  );
}
