import { DarkMode, LightMode, Logout } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Person4Icon from "@mui/icons-material/Person4";
import { Divider, FormControlLabel, Switch } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAtom } from "jotai";
import isDarkModeAtom from "../atoms/isDarkModeAtom";
import { showSidebarAtom } from "../atoms/sidebarAtom";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useAtom(showSidebarAtom);
  const [isDarkMode, setIsDarkModeAtom] = useAtom(isDarkModeAtom);

  return (
    <List className="w-full">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Person4Icon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>{isDarkMode ? <DarkMode /> : <LightMode />}</ListItemIcon>
        <FormControlLabel
          onClick={() => setIsDarkModeAtom(!isDarkMode)}
          control={<Switch defaultChecked />}
          label=""
        />
      </ListItem>
    </List>
  );
}
