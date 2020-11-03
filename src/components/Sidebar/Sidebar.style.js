import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  listItemText: {
    fontSize: "12px",
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: "4px 0px 8px 0px rgba(50, 50, 50, 0.45)",
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
    top: "500px",
    textAlign: "center",
    position: "relative",
    left: -17,
  },
  logoutIcon: {
    position: "relative",
    left: 90,
  },
}));

export default useStyles;
