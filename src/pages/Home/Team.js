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
    fontSize: 54,
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

  people: {
    paddingTop: 30,
    midth: "100%",
    maxWidth: 220,
    [theme.breakpoints.down("sm")]: {
      width: 160,
    },
  },
  peopleSmall: {
    paddingTop: 40,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
  },
  avatar: {
    width: "140px",
    height: "140px",
    borderRadius: 7,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "75px",
      height: "75px",
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
}));
export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="text-center">
        <h4 className={classes.heading}>Advisors</h4>

        <div className="row flex-row justify-content-center">
          <Hidden smDown>
            <div className="col-md-1"></div>
          </Hidden>
          <div className="col-6 col-md-2" align="center">
            <Fade left>
              <div className={classes.people}>
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQGMN4tzjcWDuA/profile-displayphoto-shrink_800_800/0/1640565370957?e=2147483647&v=beta&t=4Hhq40vlmlxrwK5dstfEgIXR-9tr3rBtWtltCX-bjpg"
                  alt="Hamzah"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Hamzah Khan</h6>
                <p className={classes.para}>Degi Head, Polygon</p>

                <Tooltip title="Telegram">
                  <a href="https://t.me/">
                    <IconButton aria-label="Telegram">
                      <Telegram className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>{" "}
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade left>
              <div className={classes.people}>
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQGMN4tzjcWDuA/profile-displayphoto-shrink_800_800/0/1640565370957?e=2147483647&v=beta&t=4Hhq40vlmlxrwK5dstfEgIXR-9tr3rBtWtltCX-bjpg"
                  alt="Hamzah"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Hamzah Khan</h6>
                <p className={classes.para}>Degi Head, Polygon</p>

                <Tooltip title="Telegram">
                  <a href="https://t.me/">
                    <IconButton aria-label="Telegram">
                      <Telegram className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>{" "}
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade left>
              <div className={classes.people}>
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQGMN4tzjcWDuA/profile-displayphoto-shrink_800_800/0/1640565370957?e=2147483647&v=beta&t=4Hhq40vlmlxrwK5dstfEgIXR-9tr3rBtWtltCX-bjpg"
                  alt="Hamzah"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Hamzah Khan</h6>
                <p className={classes.para}>Degi Head, Polygon</p>

                <Tooltip title="Telegram">
                  <a href="https://t.me/">
                    <IconButton aria-label="Telegram">
                      <Telegram className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>{" "}
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade left>
              <div className={classes.people}>
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQGMN4tzjcWDuA/profile-displayphoto-shrink_800_800/0/1640565370957?e=2147483647&v=beta&t=4Hhq40vlmlxrwK5dstfEgIXR-9tr3rBtWtltCX-bjpg"
                  alt="Hamzah"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Hamzah Khan</h6>
                <p className={classes.para}>Degi Head, Polygon</p>

                <Tooltip title="Telegram">
                  <a href="https://t.me/">
                    <IconButton aria-label="Telegram">
                      <Telegram className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>{" "}
          </div>
        </div>
        <div className="row  justify-content-center"> </div>
      </div>
    </div>
  );
}
