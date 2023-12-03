import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, Home } from './components';

const App = () => {
  const navigate = useNavigate();
 
  const hiddenRoutes =['/'];

  const isNavbarHidden = hiddenRoutes.includes(window.location.pathname);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
      <Box sx={{ backgroundColor: '#000' }}>
        {!isNavbarHidden && <Navbar onNavigate={handleNavigate} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
  );
};

export default App;
