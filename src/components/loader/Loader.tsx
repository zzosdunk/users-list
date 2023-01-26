import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const Loader = () => (
  <Container data-testid="loader">
    <CircularProgress size={64} />
  </Container>
);

export default Loader;
