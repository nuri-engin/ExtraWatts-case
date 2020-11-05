import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItemText: {
    fontSize: "12px",
  },
  logo: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  subLogoContent: {
    textAlign: "center",
    marginBottom: 10,
    color: "#13C93F",
    fontWeight: "bolder",
    fontSize: 14,
  },
  logout: {
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: -17,
  },
  logoutIcon: {
    position: "relative",
    left: 90,
  },
}));

export default useStyles;
