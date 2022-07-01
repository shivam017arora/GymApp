import React, { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { propietaryFetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  isBodyParts,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const bodyPartsData = await propietaryFetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      // console.log(bodyPartsData);
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    // console.log("Pulling data from api..");
    const link = "https://exercisedb.p.rapidapi.com/exercises";
    const response = await propietaryFetchData(link, exerciseOptions);
    const searchedExercises = response.filter((exercise) =>
      exercise.name
        .toLowerCase()
        .includes(
          search.toLowerCase() ||
            exercise.target.toLowerCase().includes(search.toLowerCase()) ||
            exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
            exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
        )
    );
    setSearch("");
    setExercises(searchedExercises);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          mb: { lg: "50px", xs: "30px" },
          textAlign: "center",
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "330px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          height="77px"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "54px",
            position: "absolute",
            ml: "2px",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts={isBodyParts}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
