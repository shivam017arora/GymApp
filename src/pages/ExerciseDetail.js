import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import {
  exerciseOptions,
  youtubeOptions,
  propietaryFetchData,
} from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const exerciseDetail = await propietaryFetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetail);
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseVideosData = await propietaryFetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
      const targetMuscleExercisesData = await propietaryFetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equimentExercisesData = await propietaryFetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };
    fetchExerciseDetail();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
