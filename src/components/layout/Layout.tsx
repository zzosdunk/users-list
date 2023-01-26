import type { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Box, Container } from "./Layout.styles";

const Layout: FC = ({ children }) => (
  <div data-testid="layout">
    <Box>
      <AppBar position="static" data-testid="app-bar">
        <Toolbar>
          <Typography variant="h6" component="div" data-testid="app-title">
            Content List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Container maxWidth="xl">{children}</Container>
  </div>
);

export default Layout;
