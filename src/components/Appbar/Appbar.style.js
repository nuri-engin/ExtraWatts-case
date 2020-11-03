import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#13C93F !important",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      visibility: "hidden",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
