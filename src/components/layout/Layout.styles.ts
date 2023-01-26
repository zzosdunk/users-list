import MuiContainer from "@mui/material/Container";
import MuiBox from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Box = styled(MuiBox)({
  flexGrow: 1,
});

export const Container = styled(MuiContainer)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  "&.MuiContainer-root": {
    minHeight: `calc(100vh - 64px)`,
  },
}));
