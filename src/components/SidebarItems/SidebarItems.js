import React from "react";
import useStyles from "./SidebarItems.style.js";

// Material-UI components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";

// Logo and Icons
import { ReactComponent as AppLogo } from "../../assets/logo/kiwiLogo.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout-icon.svg";

export default function SidebarItems() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        <div className={classes.logo}>
          <AppLogo />
        </div>
        <div className={classes.subLogoContent}>
          <span style={{ borderBottom: "1px solid #0D361E" }}>
            ODESSA SAFE ZONE
          </span>
        </div>
        {["KIEV SAFE ZONE", "LVIV SAFE ZONE"].map((text, index) => (
          <ListItem
            className={classes.listItemText}
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
            <LogoutIcon className={classes.logoutIcon} />
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
}
