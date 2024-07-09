import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { navItems } from "../../constant";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        <ul className="nav-list flex gap-5">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
