import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StorageSharpIcon from '@mui/icons-material/StorageSharp';
import TouchAppSharpIcon from '@mui/icons-material/TouchAppSharp';
import SensorsSharpIcon from '@mui/icons-material/SensorsSharp';
import CellTowerSharpIcon from '@mui/icons-material/CellTowerSharp';
import DataObjectIcon from '@mui/icons-material/DataObject';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useTheme } from "@material-ui/styles";
import classNames from "classnames";
// styles
import useStyles from "./styles";
// components
import SidebarLink from "./components/SidebarLink/SidebarLink";


// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../../utils/LayoutContext";

const structure = [
  { id: 22, label: "Live Dashboard", link: "/", icon: <DataObjectIcon/> },
  { id: 1, label: 'Devices', link: '/devices', icon: <SensorsSharpIcon /> },
  // { id: 2, label: 'Gateways', link: '/gateways', icon: <CellTowerSharpIcon /> },
  // { id: 3, type: 'divider' },
  // { id: 4, type: "title", label: "Details" },
  // { id: 7, label: "All Data", link: "/data", icon: <StorageSharpIcon /> },
  // { id: 5, label: "Give Payload", link: "/buzzer-command", icon: <TouchAppSharpIcon /> },
  // // { id: 6, label: "AHC Status", link: "/ahc-status", icon: <AccountTreeIcon /> },
  // { id: 6, label: "Device Compare", link: "/devices-compare", icon: <AddTaskIcon /> },
  // { id: 8, type: "divider" },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default Sidebar;
