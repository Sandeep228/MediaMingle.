import React from "react";
import { Stack, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <AppBar position="sticky" sx={{ background: '#000' }}>
      <Toolbar>
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: 'none', color: 'inherit'}}>
          <img src={logo} alt="MindMingle" height={45} />
        </Link>
        <SearchBar />

        {isAuthenticated ? (
          <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={{ xs: 1, sm: 2 }}>
            <img
              src={user.picture}
              alt={user.name}
              style={{ borderRadius: '50%', height: { xs: '36px', sm: '48px' }, width: { xs: '36px', sm: '48px' } }}
            />
            <Stack sx={{ marginLeft: { xs: 0, sm: '16px' } }}>
              <Typography variant="h6" noWrap>
                {user.name}
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {user.email}
              </Typography>
            </Stack>
            <Button variant="outlined" onClick={() => logout()} sx={{ marginLeft: { xs: 'auto', sm: '16px' } }}>
              Log Out
            </Button>
          </Stack>
        ) : (
          <Button component={Link} to="/login" variant="outlined" sx={{ marginLeft: 'auto' }}>
            Log In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

