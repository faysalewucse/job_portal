import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
