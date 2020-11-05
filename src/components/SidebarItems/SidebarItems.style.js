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
    left: 50,
    bottom: 20
  },
  logoutIcon: {
    position: "relative",
    left: 25
  },
}));

export default useStyles;
