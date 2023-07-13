import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    cursor: "pointer",
    backgroundImage: "linear-gradient(#8a46ff,#6e38cc)",
    borderRadius: "3rem",
    padding: "10px 20px 10px 14px",
    fontSize: ".85rem",
    fontWeight: 500,
    textDecoration: "none",
    transition: "all .2s",
    position: "relative",
    textTransform: "capitalize",

    "&:hover": {
      background: "rgba(130, 71, 229, 0.9)",
    },
  },
}));

export default function CustomButton({ title, link }) {
  const classes = useStyles();
  return (
    <a href={link} style={{ textDecoration: "none" }} target="_blank">
      <Button variant="contained" color="primary" className={classes.button}>
        {title}
      </Button>
    </a>
  );
}
