
import * as React from "react";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

import Box from "@mui/material/Box";
import Header from "../../components/admin/Header/Header";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import Dashboardpage from "../../components/admin/Dashboard/Dash";

const mdTheme = createTheme();


function Dashboard() {
  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Dashboardpage />
    </Box>
  </ThemeProvider>
  )
}

export default Dashboard