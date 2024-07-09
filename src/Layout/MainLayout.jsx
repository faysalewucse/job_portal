import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import useAuthCheck from "../hooks/useAuthCheck";
import { Container, Box, CircularProgress } from "@mui/material";
import Navbar from "../components/navbar/Navbar";

export const MainLayout = () => {
  const authChecked = useAuthCheck();

  return (
    <div>
      {!authChecked ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <Navbar />
          <Box sx={{ flexGrow: 1, mt: 2, minHeight: "85vh" }}>
            <Container>
              <Outlet />
            </Container>
          </Box>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
