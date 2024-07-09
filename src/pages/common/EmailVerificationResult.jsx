import { useParams } from "react-router-dom";
import { CircularProgress, Box, Container } from "@mui/material";
import { useVerifyQuery } from "../../features/auth/authApi.js";
import EmailVerified from "../../components/auth/EmailVerified.jsx";
import EmailNotVerified from "../../components/auth/EmailNotVerified.jsx";

const EmailVerificationResult = () => {
  const { token } = useParams();
  const {
    isLoading,
    isError: responseError,
    isSuccess,
  } = useVerifyQuery(token);

  if (isLoading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (responseError) {
    return <EmailNotVerified message={responseError.data.message} />;
  }

  return isSuccess ? <EmailVerified /> : <Box></Box>;
};

export default EmailVerificationResult;
