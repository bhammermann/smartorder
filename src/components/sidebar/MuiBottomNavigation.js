import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, BottomNavigation, BottomNavigationAction } from "@mui/material";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";





export const MuiBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: "100%", position: "sticky", bottom: 0 }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<HomeIcon/>}/>
        <BottomNavigationAction icon={<AccessTimeIcon />} />
        <BottomNavigationAction icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </Box>
  );
};
