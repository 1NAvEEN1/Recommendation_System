import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{bgcolor:"grey.100", pt:2, height:"100svh"}}>
      <Outlet />
    </Box>
  );
};

export default Layout;
