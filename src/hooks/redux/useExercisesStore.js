import { onChecking, saveUserExercises, onError } from "../../store/slices/exercisesSlice";
import { saveActiveWorkoutExercises } from "../../store/slices/workoutsSlice";

import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";

import useWorkoutsStore from "./useWorkoutsStore";

export default useExercisesStore = () => {
  const { getWorkoutsData } = useWorkoutsStore();
  const dispatch = useDispatch();
  const { activeWorkoutExercises, activeWorkoutDetails } = useSelector((state) => state.workouts);
  const { user } = useSelector((state) => state.auth);

  const deleteWorkoutExercise = async (exerciseId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.delete(`/exercise/deleteExercise/${exerciseId}/${user.id}`);
      const updateExercises = activeWorkoutExercises.exercises.filter(
        (element) => element.id !== exerciseId,
      );
      dispatch(saveActiveWorkoutExercises(updateExercises));
    } catch (error) {
      console.log(error.response.data);
      dispatch(onError(error.response.data));
    }
  };

  const createNewExercise = async (exerciseData) => {
    try {
      const { data } = await axios.post(
        `/exercise/newExercise/${user.id}/${activeWorkoutDetails.workoutId}`,
        exerciseData,
      );
      dispatch(saveActiveWorkoutExercises([...activeWorkoutExercises.exercises, data]));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const createSuperset = async (exercisesIds) => {
    try {
      const { data } = await axios.post(`/superset/newSuperset/${activeWorkoutDetails.workoutId}`, {
        exercisesIds,
      });
      // const updateExercises = activeWorkoutExercises.exercises.filter(
      //   (element) => !exercisesIds.includes(element.id),
      // );
      // dispatch(saveActiveWorkoutExercises([...updateExercises, data]));
      getWorkoutsData(activeWorkoutDetails.workoutId);
    } catch (error) {
      console.log(error);
      dispatch(onError(error.response.data));
    }
  };

  const getUserExercises = async () => {
    dispatch(onChecking());
    try {
      const { data } = await axios.get(`/exercise/findAll/${user.id}`);
      dispatch(saveUserExercises(data));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const getExerciseDetails = async (exerciseId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.get(`/exercise/findOne/${exerciseId}`);
      return data;
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const addExercise = async (exerciseData, exerciseId) => {
    // try {
    //   const { data } = await axios.post(
    //     `/exercise/addExercise/${user.id}/${activeWorkoutDetails.workoutId}`,
    //     exerciseData,
    //   );
    //   dispatch(saveActiveWorkoutExercises([...activeWorkoutExercises.exercises, data]));
    // } catch (error) {
    //   dispatch(onError(error.response.data));
    // }
  };

  return {
    deleteWorkoutExercise,
    createNewExercise,
    createSuperset,
    getUserExercises,
    getExerciseDetails,
    addExercise
  };
};
