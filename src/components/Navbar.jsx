import React,{useState} from "react";
import {  AppBar, Toolbar, Avatar ,Menu,MenuItem} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }



  return (
    <AppBar position="sticky" sx={{ background: "red" }}>
      <Toolbar>
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
          <img src={logo} alt="MindMingle" height={45} />
        </Link>
        <SearchBar />
        {isAuthenticated ? (
          <>
          <Avatar alt={user.name} src={user.picture}  onClick={handleClick}/>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>{user.name}</MenuItem>
            <MenuItem> {user.email}</MenuItem>
            <MenuItem> User Profile</MenuItem>
            <MenuItem onClick={() => logout()}> Log Out</MenuItem>
          </Menu>
          </> )
        : " "
    }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


