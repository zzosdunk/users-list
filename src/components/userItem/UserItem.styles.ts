import MuiListItem from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";

export const ListItem = styled(MuiListItem, {
  shouldForwardProp: (prop) => prop !== "even",
})<{ even?: boolean }>(({ even }) => ({
  backgroundColor: even ? "#3f3f3f" : "#292929",
}));
