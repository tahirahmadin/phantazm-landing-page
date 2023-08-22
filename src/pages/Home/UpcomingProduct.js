import { Box, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CalendarToday } from "@material-ui/icons";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "5%",
    paddingRight: "5%",
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
  card: {
    borderRadius: 21,
    width: 1100,
    marginTop: 30,
    backgroundColor: "#171320",
    backgroundImage: `url('https://assets-global.website-files.com/637359c…/648c261…_Shapes.svg')`,
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    padding: "40px 40px 40px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  featureCard: {
    backgroundColor: "#171320",
    backgroundImage: `url('https://outcry.io/wp-content/uploads/2019/05/rocket-750x365.jpg')`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "10px",
    height: 300,
    borderRadius: 10,
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: "3.75rem",
    fontWeight: "500",
    lineHeight: 1.2,

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
      textAlign: "center",
    },
  },

  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: ".4px",
    textAlign: "left",
    color: "#e5e5e5",
    fontSize: "1rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  subheading: {
    color: "white",
    width: "auto",
    textAlign: "left",
    lineHeight: 1.2,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    fontSize: "3.0rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: 32,
    },
  },
}));

export default function UpcomingProducts() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Pulse>
        <h1 className={classes.heading}>Upcoming milestones</h1>
      </Pulse>
      <div className="d-flex justify-content-center">
        <Box className={classes.card}>
          <div className="row">
            <div className="col-md-7">
              <h1 className={classes.subheading}>Token Launch!</h1>
              <p className={classes.para}>
                We are launching out token for public sale.
              </p>
              <p className={classes.para}>
                So far the protocol has been entirely bootstrapped and we are
                planning to do a public token launch. The token is designed to
                share protocol fees i.e. giving "real yield" and utility to
                holders in addition to governance.
              </p>
              <Box>
                <p
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    paddingLeft: 10,
                    marginTop: 30,
                    marginLeft: -10,
                  }}
                >
                  <CalendarToday style={{ fontSize: 21, marginRight: 7 }} />
                  Launch date
                </p>

                <h1 className="gradient-text-big">
                  <span
                    style={
                      {
                        // fontSize: 28,
                        // textTransform: "lowercase",
                        // marginLeft: -20,
                      }
                    }
                  >
                    Coming Soon
                  </span>
                </h1>

                {/* <p
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "1.0rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    paddingLeft: 10,
                  }}
                >
                  NOVEMBER 2023
                </p> */}
              </Box>
            </div>
            <div className="col-md-5">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/rocket-7865122-6308171.png"
                height="100%"
                style={{ borderRadius: 21, maxHeight: 300 }}
              />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
