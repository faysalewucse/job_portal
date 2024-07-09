import { CheckCircle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../helper/slugs";
import { Container, Box, Typography, Button } from "@mui/material";

const EmailVerified = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "96vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          p: 4,
          textAlign: "center",
          borderRadius: 1,
          boxShadow: 3,
          width: { md: "33%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "success.main",
            fontSize: "7rem",
          }}
        >
          <CheckCircle />
        </Box>
        <Typography variant="h4" fontWeight="bold">
          Thank you
        </Typography>
        <Typography variant="body1">You have verified your email</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(HOME_PATH)}
          sx={{ mt: 3, width: "160px" }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default EmailVerified;
