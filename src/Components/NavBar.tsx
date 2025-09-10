import { Twitter } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useAtom } from "jotai";
import { showSidebarAtom } from "../atoms/sidebarAtom";
import React, { useEffect } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const [showSidebar, setShowSidebar] = useAtom(showSidebarAtom);
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    setShowSidebar(!isSmallScreen);
  }, [isSmallScreen]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Stack
          className="w-full"
          direction={"row"}
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {isSmallScreen && (
              <IconButton
                className="show-sidebar"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <MenuIcon className="block md:hidden" />
              </IconButton>
            )}

            <Box className="Logo">
              <Typography variant="h4" className="hidden md:block font-bold">
                Twitter
              </Typography>
              <Twitter className="block md:hidden" />
            </Box>
          </Stack>

          <Search className="md:w-1/2">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box className="flex items-center">
            <Box className="hidden md:block">
              <Badge badgeContent={4} color="primary" className="mr-2">
                <MailIcon color="action" fontSize="large" />
              </Badge>
              <Badge badgeContent={2} color="primary" className="mr-2">
                <NotificationsIcon color="action" fontSize="large" />
              </Badge>
            </Box>
            <Avatar
              className="w-[35px] h-[35px] mr-2"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              onClick={handleClick}
              component={"button"}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Account</MenuItem>
              <MenuItem onClick={handleClose} className="block md:hidden">
                Mails
              </MenuItem>
              <MenuItem onClick={handleClose} className="block md:hidden">
                Notifications
              </MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
