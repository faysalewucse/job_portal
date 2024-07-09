import React, { useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link as MuiLink,
  Box,
  Grid,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../features/auth/authApi";
import { User, Lock } from "@phosphor-icons/react";
import { siteName } from "../../constant";

const Login = () => {
  const navigate = useNavigate();
  const [login, { data, isLoading, error: responseError }] = useLoginMutation();

  const onFinish = async (values) => {
    const { email, password } = values;
    await login({ email, password });
  };

  useEffect(() => {
    if (data?.payload.accessToken && data?.payload.user) {
      navigate("/");
      toast.success(data.message);
    }
  }, [data, responseError, navigate]);

  return (
    <Container maxWidth="sm">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "85vh" }}
      >
        <Grid item xs={12}>
          <Box p={5} bgcolor="white" boxShadow={3} borderRadius={2}>
            <Typography variant="h4" align="center" gutterBottom>
              {siteName}
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Please Sign in to your account
            </Typography>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                onFinish({
                  email: formData.get("email"),
                  password: formData.get("password"),
                });
              }}
              className="flex flex-col gap-4"
            >
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                InputProps={{
                  startAdornment: <User className="mr-2" />,
                }}
                required
                type="email"
                sx={{ px: 2 }}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                InputProps={{
                  startAdornment: <Lock className="mr-2" />,
                }}
                required
                sx={{ px: 2 }}
              />
              <FormControlLabel
                control={<Checkbox name="remember" />}
                label="Remember me"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isLoading}
              >
                Sign In
              </Button>
              <div className="my-2 flex gap-5 items-center">
                <hr className="flex-1 text-black/10" />
                or
                <hr className="flex-1 text-black/10" />
              </div>
              <Typography variant="body2" align="center">
                Don&#39;t have an account?{" "}
                <Link
                  to="/register"
                  component={MuiLink}
                  className="text-secondary font-medium"
                >
                  Create account
                </Link>
              </Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
