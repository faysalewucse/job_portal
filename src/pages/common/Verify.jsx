import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";
import { SealCheck } from "@phosphor-icons/react";
import { useEffect } from "react";
import showApiErrorMessage from "../../utils/errorHandler";
import { useRegisterMutation } from "../../features/auth/authApi";
import { toast } from "react-toastify";
import { HOME_PATH, VERIFY_PATH } from "../../helper/slugs";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();

  const { newUser } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate(HOME_PATH);
    }
  }, [location.state, navigate]);

  useEffect(() => {
    if (responseError?.data) {
      showApiErrorMessage(responseError);
    }
    if (data?.accessToken && data?.user) {
      navigate("/");
    }
  }, [data, responseError, navigate]);

  const resendEmailHandler = async () => {
    const { data } = await register(newUser);

    if (data.success) {
      toast.success(data.message);
      navigate(VERIFY_PATH, { state: data.payload });
    }
  };

  return (
    <Container
      maxWidth="sm"
      className="flex justify-center items-center px-5 md:px-0 py-16 md:py-20"
    >
      <Box className="bg-white p-8 text-center max-w-xl mx-auto space-y-4 relative">
        <SealCheck
          size={80}
          className="text-success mx-auto absolute bg-background rounded-full p-2 -top-10 left-1/2 -translate-x-1/2"
        />
        <Typography variant="h5" className="mb-4">
          Please verify your email
        </Typography>
        <Typography>
          You're almost there! We sent an email to{" "}
          <Typography component="span" color="secondary">
            {newUser.email}
          </Typography>
        </Typography>
        <Typography>
          Just click on the link in that email to complete your signup. If you
          don’t see it, you may need to check your spam folder.
        </Typography>
        <Typography variant="body2" color="error">
          Still can’t find the email?
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={resendEmailHandler}
          disabled={isLoading}
          className="mx-auto bg-success text-white"
          style={{ width: "10rem" }}
        >
          Resend Email
        </Button>
        <Typography variant="body2">
          Need help?{" "}
          <Link to="/contact" className="text-success font-medium underline">
            Contact Us
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Verify;
