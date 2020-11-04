import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: "0px 0px 8px 0px rgba(50, 50, 50, 0.40)",
  },
}));

export default useStyles;
