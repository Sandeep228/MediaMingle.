import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Divider, Icon, Stack, Typography } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();


  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleAuth = async () => {
    await loginWithRedirect();
  };

  return (
      <Box
     style={{height:"100vh",overflow:"hidden",background:"linear-gradient(to right,black, #9A2EFE)"
    }}      >
        <Box
          h="70px"
          borderBottom="1px solid #363739"
          style={{ overflow: "hidden" }}
          backgroundColor="indianred"
        >
          <Box px="24px" py="16px" marginLeft="80px" marginRight="80px">
            <Stack
              display="flex"
              justifyContent="space-between"
              position="sticky"
            >
              <Box style={{display:"flex", justifyContent:"center",alignItems:"center"}}> 
                <Icon as={SiYoutubeshorts} h={6} w={6} style={{marginRight:"23px"}}/>
                <Typography onClick={handleAuth} as="b" style={{fontSize:"23px"}} color="white">
                MediaMingle
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box px="24px" marginLeft="80px" marginRight="90px">
          <Box style={{height:"310px",width:"1232px",marginTop:"221px" }}>
            <Typography style={{
               fontSize:"48px",
                color:"white",
                 marginLeft:"410px" ,
                 mb:"6px"
            }}>
              Welcome to MediaMingle
            </Typography>

            <Divider style={{
                width:"495px", marginLeft:"410px" ,borderColor:"#363739" 
            }}/>
            <Box marginLeft="550px" marginTop="32px">
              <Button variant="contained" style={{ fontSize: '20px'  }}
                              onClick={handleAuth}
                              startIcon={<FaGoogle />} 
                              color="primary"
                              borderRadius="24px"
>
              Login with Gmail

      </Button>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default Home;
