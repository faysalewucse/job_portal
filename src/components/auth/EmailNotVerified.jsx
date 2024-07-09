import { SealWarning } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../helper/slugs";
import { Container, Box, Typography, Button } from "@mui/material";

const EmailNotVerified = ({ message }) => {
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
            color: "error.main",
            fontSize: "7rem",
          }}
        >
          <SealWarning color="red" />
        </Box>
        <Typography variant="h4" fontWeight="bold">
          Oops
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">Verification Failed</Typography>
          <Typography variant="body2" color="error">
            {message}
          </Typography>
        </Box>
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

export default EmailNotVerified;
