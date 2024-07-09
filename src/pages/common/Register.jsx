import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Link as MuiLink,
  Box,
  Grid,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../features/auth/authApi";
import showApiErrorMessage from "../../utils/errorHandler";
import { LOGIN_PATH } from "../../helper/slugs";
import {
  IdentificationBadge,
  Lock,
  LockKeyOpen,
  User,
} from "@phosphor-icons/react";
import { siteName } from "../../constant";

const Register = () => {
  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();
  const navigate = useNavigate();

  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (responseError?.data) {
      showApiErrorMessage(responseError);
    }
    if (data?.accessToken && data?.user) {
      navigate("/");
    }
  }, [data, responseError, navigate]);

  const onFinish = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    };

    // Check if passwords match
    if (values.password !== values.confirm) {
      setPasswordMatch(false);
      return; // Exit function if passwords do not match
    }

    const { data } = await register(values);

    if (data?.success) {
      toast.success(data.message);
      navigate(LOGIN_PATH);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "85vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box
          component="form"
          onSubmit={onFinish}
          className="p-5 flex flex-col justify-center bg-white"
          sx={{
            borderRadius: 4,
            boxShadow: 3,
            p: 3,
          }}
        >
          <Typography variant="h4" className="text-center mb-4">
            {siteName}
          </Typography>
          <Typography variant="body1" className="mb-5">
            Create a new account
          </Typography>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: <IdentificationBadge className="mr-2" />,
            }}
            required
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            InputProps={{
              startAdornment: <User className="mr-2" />,
            }}
            required
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            InputProps={{
              startAdornment: <Lock className="mr-2" />,
            }}
            required
          />
          <TextField
            fullWidth
            id="confirm"
            name="confirm"
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            type="password"
            InputProps={{
              startAdornment: <LockKeyOpen className="mr-2" />,
            }}
            required
            error={!passwordMatch}
            helperText={!passwordMatch ? "Passwords do not match" : ""}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
            className="mt-4"
          >
            Create
          </Button>
          <div className="my-2 flex gap-5 items-center">
            <hr className="flex-1 text-black/10" />
            or
            <hr className="flex-1 text-black/10" />
          </div>
          <Typography variant="body2" className="text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              component={MuiLink}
              className="text-secondary font-medium"
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
