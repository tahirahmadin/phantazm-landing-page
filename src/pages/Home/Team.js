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
        <h4 className={classes.heading}>Our Team</h4>

        <div className="row flex-row justify-content-center">
          <Hidden smDown>
            <div className="col-md-1"></div>
          </Hidden>
          <div className="col-6 col-md-2" align="center">
            <Fade left>
              <div className={classes.people}>
                <img
                  src="https://assets.website-files.com/61554cf1696635e97e823d26/637a93cff3d6aaa9641d304d_888723395%20-%201%20-%20Digital%20painting%20of%20an%20animation%20c.png"
                  alt="Narmis"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Narmis Nahk</h6>
                <p className={classes.para}>CEO & Co-founder</p>

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
                  src="https://static.fotor.com/app/features/img/aiface/realistic/2.png"
                  alt="rimaa"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Rimaa Mala</h6>
                <p className={classes.para}>BlockChain Lead</p>

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
                  src="https://images.nightcafe.studio/jobs/75Q7LZEgvfrTn7pACksG/75Q7LZEgvfrTn7pACksG--3--lyjfx.jpg?tr=w-1600,c-at_max"
                  alt="Rihat"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Rihat Damha</h6>
                <p className={classes.para}>Marketing Lead</p>

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
                  src="https://images.nightcafe.studio/jobs/mSC9EE8oUI21GbKYWBV8/mSC9EE8oUI21GbKYWBV8--4--d9mz0.jpg?tr=w-1600,c-at_max"
                  alt="Rima"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Iuqiddis Rima</h6>
                <p className={classes.para}>Frontend Engineer</p>

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
