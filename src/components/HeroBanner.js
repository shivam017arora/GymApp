import React from "react";

import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "170px", xs: "70px" },
        ml: { lg: "100px", sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="24px">
        Fitness Club
      </Typography>
      <Typography
        color=""
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
          mb: { lg: "20px", xs: "10px" },
          mt: { lg: "30px", xs: "10px" },
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        color=""
        fontSize="22px"
        lineHeight="35px"
        mb={3}
        href="#exercises"
      >
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error">
        {" "}
        Explore Exercises{" "}
      </Button>
      <Typography
        fontWeight="600"
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "block" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
