import { Box, Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "5%",
    paddingRight: "5%",
    minHeight: 600,
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

  title: {
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
    fontSize: 13,
    marginTop: 14,
    paddingLeft: 7,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
      fontSize: 12,
    },
  },

  card: {
    padding: 21,
    width: "fit-content",
    maxWidth: 250,
    height: "fit-content",
    minHeight: 300,
    paddingBottom: 20,
    borderRadius: 21,
    backgroundColor: "#171320",

    boxShadow: "0px 50px 200px rgba(0, 0, 0, 0.5)",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 10,
      paddingRight: 10,
      width: "100%",
      height: "100%",
    },
  },
}));

export default function RoadmapNew() {
  const classes = useStyles();
  const [x, setX] = useState(window.innerWidth > 950 ? 0 : -100);

  return (
    <div className={classes.background}>
      <h5 className={classes.title}>Roadmap</h5>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          spacing={2}
          width={"100%"}
          style={{ marginTop: 20, maxWidth: 1000 }}
        >
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className={classes.card}>
              <h5 className={classes.quarterTitle}>Q3 - 2023</h5>

              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: 120 }}
              >
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/dollar-coin-4604543-3816872.png?f=webp"
                  height="75px"
                />
              </div>
              <h5 className={classes.cardTitle}>Token Launch</h5>
              <div className="mt-3">
                <li className={classes.li}>Minimum viable product is ready</li>
                <li className={classes.li}>
                  Preparing for IDO launch & raising funds.
                </li>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className={classes.card}>
              <h5 className={classes.quarterTitle}>Q4 - 2023</h5>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: 120 }}
              >
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/delivery-box-5340240-4465979.png"
                  height="60px"
                />
              </div>
              <h5 className={classes.cardTitle}>Mainnet Release</h5>
              <div className="mt-3">
                <li className={classes.li}>
                  Operational lending and borrowing product will be live.
                </li>
                <li className={classes.li}>
                  Briding 10M+ Liquidity to our protocol
                </li>
              </div>
            </Card>{" "}
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className={classes.card}>
              <h5 className={classes.quarterTitle}>Scaling</h5>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: 120 }}
              >
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/business-startup-5825143-4874125.png?f=webp"
                  height="75px"
                />
              </div>
              <h5 className={classes.cardTitle}>Mainnet Release</h5>
              <div className="mt-3">
                <li className={classes.li}>MultiChain Lending and Borrowing</li>
                <li className={classes.li}>
                  Institution and stable coin release.
                </li>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
