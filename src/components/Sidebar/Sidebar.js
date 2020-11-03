import React from "react";
import useStyles from "./Sidebar.style.js";
import Appbar from "../Appbar/Appbar";
//material-ui components
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

export default function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <div className={classes.logo}>Logo Here</div>
        <div className={classes.subLogoContent}>
          <span style={{ borderBottom: "1px solid #0D361E" }}>
            ODESSA SAFE ZONE
          </span>
        </div>
        {["KIEV SAFE ZONE", "LVIV SAFE ZONE"].map((text, index) => (
          <ListItem
            classes={{ primary: classes.listItemText }}
            style={{ textAlign: "center", padding: 0, color: "#073F15" }}
            button
            key={text}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  type="body2"
                  style={{
                    fontSize: 13,
                  }}
                >
                  <span
                    style={{
                      borderBottom: "1px solid #F2F2F2",
                    }}
                  >
                    {text}
                  </span>
                </Typography>
              }
            />
          </ListItem>
        ))}
        <ListItem
          className={classes.logout}
          style={{ textAlign: "center" }}
          button
          key="logout"
        >
          <ListItemIcon>
            <ExitToAppIcon className={classes.logoutIcon} />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography type="body2" style={{ fontSize: 10 }}>
                LOGOUT
              </Typography>
            }
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Appbar handleDrawerToggle={handleDrawerToggle} />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
