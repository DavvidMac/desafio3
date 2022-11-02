import React from "react";
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          fontFamily: "Times New Roman",
          fontWeight:'600',
          textAlign: "center",
          color: "#646464",
        }}
        mt={1}
      >
        <p><sup>&copy;</sup> Software Powered by Xtrategie</p>
        <p>2009 - 2022</p>
      </Box>
    </>
  );
};

export default Footer;
