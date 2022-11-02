import React from "react";
import Box from "@mui/material/Box";
 
const LineBox = () => {
  return (
    <Box
      component="div"
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      style={{
        height: "55vh",
        borderRight: "solid 1px #a4bbdd",
      }}
    ></Box>
  );
};

export default LineBox;
