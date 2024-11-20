import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ pt:2, height:"100%",minHeight:"100svh"}}>
      <Outlet />
    </Box>
  );
};

export default Layout;
