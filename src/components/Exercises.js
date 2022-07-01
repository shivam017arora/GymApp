import React, { useState, useEffect } from "react";
import Pegination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, propietaryFetchData } from "../utils/fetchData";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      const link = "https://exercisedb.p.rapidapi.com/exercises";
      if (bodyPart === "all") {
        exercisesData = await propietaryFetchData(link, exerciseOptions);
      } else {
        exercisesData = await propietaryFetchData(
          link + "/bodyPart/" + bodyPart,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behaviour: "smooth" });
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px", xs: "70px" },
        p: "20px",
      }}
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "80px", xs: "50px" }, width: "100%", height: "100%" }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <Box key={index}>
            <ExerciseCard key={index} exercise={exercise}>
              {exercise.name}
            </ExerciseCard>
          </Box>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pegination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
