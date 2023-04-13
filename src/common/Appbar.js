import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import DotCircle from "../components/DotCircle";
import CustomButton from "./CustomButton";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-scroll";
import { Button, Container } from "@material-ui/core";
import { Telegram } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 30,
    background: "rgba(130, 71, 229, 0.7)",
    padding: "10px 20px 10px 20px",
    color: "white",
    width: "fit-content",
    fontWeight: 600,
    fontSize: 15,

    "&:hover": {
      background: "rgba(130, 71, 229, 0.9)",
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  tabs: {
    color: "white",
    display: "none",
    paddingRight: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    padding: "9px 14px 0px",
    cursor: "pointer",
    fontSize: "1.1vw",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    backgroundColor: "transparent",
  },
  menuIcon: {
    color: "#f9f9f9",
  },
  list: {
    width: "250px",
    borderLeft: "5px solid pink",
    borderColor: theme.palette.pbr.primary,
    height: "100%",
    backgroundColor: "#000000",
  },
  fullList: {
    width: "auto",
  },
  menuTitle: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    textAlign: "left",
    fontSize: 16,
    color: "white",
  },
  menuTitlePink: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    textAlign: "left",
    fontSize: 16,
    color: theme.palette.pbr.primary,
  },
  mobileLink: {
    color: theme.palette.pbr.textSecondary,
    textDecoration: "none",
  },
  mobileButton: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    color: "#ffffff",
    padding: "5px 15px 5px 15px",
    fontWeight: 600,
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ paddingTop: 30 }}>
        {[
          { name: "Our Products", id: "products" },
          { name: "Ecosystem", id: "ecosystem" },
          { name: "Achievements", id: "achievements" },
          { name: "$Sleep Token", id: "token" },
          { name: "Roadmap", id: "roadmap" },
          { name: "Advisors", id: "team" },
        ].map((tab, index) => (
          <Link
            activeClass="active"
            to={tab.id}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            <ListItem
              button
              key={tab.name}
              onClick={toggleDrawer(anchor, false)}
            >
              <ListItemText primary={tab.name} className={classes.menuTitle} />
            </ListItem>
          </Link>
        ))}{" "}
        <List>
          <a href="https://polkabridge.org/ventures">
            <ListItem button key="Ventures">
              <ListItemText primary="Ventures" className={classes.menuTitle} />
            </ListItem>
          </a>
        </List>
        {[{ name: "Ventures", id: "/ventures" }].map((tab, index) => (
          <ListItem button key={tab.name} style={{ paddingLeft: 30 }}>
            <CustomButton
              title={"Launch App"}
              link={"https://swap.polkabridge.org"}
            ></CustomButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{
          background: "black",
          boxShadow: "none",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: 10,
        }}
      >
        <Toolbar className="d-flex justify-content-between">
          <Link to="/">
            {" "}
            <Typography className={classes.title} variant="h6" noWrap>
              <img src="./sleepLogo.webp" alt="logo" height="50px" />
              <span style={{ color: "white" }}>SleepSwap</span>
            </Typography>
          </Link>
          <div className="d-flex justify-content-end">
            <Link
              activeClass="active"
              to="roadmap"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
            >
              <Typography className={classes.tabs} variant="body1">
                Roadmap
              </Typography>
            </Link>
            <Link
              activeClass="active"
              to="team"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
            >
              <Typography className={classes.tabs} variant="body1">
                Advisors
              </Typography>
            </Link>

            <div className={classes.sectionDesktop}>
              <Button className={classes.button}>
                <Telegram />
                Join community
              </Button>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <div className="d-flex align-items-center">
              <img src="./polkabridge.png" alt="logo" height="50px" />{" "}
              <span style={{ color: "white" }}>SleepSwap</span>
            </div>

            <div>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    aria-label="Menu"
                    aria-haspopup="true"
                    className={classes.menuIcon}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor={anchor}
                    disableSwipeToOpen={false}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
