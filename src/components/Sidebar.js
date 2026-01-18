import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SendIcon from "@mui/icons-material/Send";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SecurityIcon from "@mui/icons-material/Security";

const drawerWidth = 240;

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "Send Money",
      path: "/transfer",
      icon: <SendIcon />,
    },
    {
      text: "Portfolio",
      path: "/portfolio",
      icon: <ShowChartIcon />,
    },
    {
      text: "Audit Logs",
      path: "/audit",
      icon: <SecurityIcon />,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#0b1c2d",
          color: "#ffffff",
        },
      }}
    >
      <Toolbar>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            VaultCore
          </Typography>
          <Typography variant="caption" color="gray">
            Financial Platform
          </Typography>
        </Box>
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(255,255,255,0.08)",
              },
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#ffffff" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
