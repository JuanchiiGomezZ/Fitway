import { onChecking, saveUserExercises, onError } from "../../store/slices/exercisesSlice";
import { saveWorkoutExercises } from "../../store/slices/workoutsSlice";

import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";

import useWorkoutsStore from "./useWorkoutsStore";

export default useExercisesStore = () => {
  const { getWorkoutData } = useWorkoutsStore();
  const dispatch = useDispatch();
  const { workoutExercises, workoutDetails } = useSelector((state) => state.workouts);
  const { user } = useSelector((state) => state.auth);

  const deleteWorkoutExercise = async (exerciseId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.delete(`/exercise/deleteExercise/${exerciseId}/${user.id}`);
      const updateExercises = workoutExercises.Exercises.filter(
        (element) => element.id !== exerciseId,
      );
      dispatch(saveWorkoutExercises(updateExercises));
    } catch (error) {
      console.log(error.response.data);
      dispatch(onError(error.response.data));
    }
  };

  const createNewExercise = async (exerciseData) => {
    try {
      const { data } = await axios.post(
        `/exercise/newExercise/${user.id}/${workoutDetails.workoutId}`,
        exerciseData,
      );
      dispatch(saveWorkoutExercises([...workoutExercises.Exercises, data]));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const createSuperset = async (exercisesIds) => {
    try {
      const { data } = await axios.post(`/superset/newSuperset/${workoutDetails.workoutId}`, {
        exercisesIds,
      });
      // const updateExercises = workoutExercises.Exercises.filter(
      //   (element) => !exercisesIds.includes(element.id),
      // );
      // dispatch(saveWorkoutExercises([...updateExercises, data]));
      getWorkoutData(workoutDetails.workoutId);
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
    try {
      const { data } = await axios.post(
        `/workout/addExercise/${workoutDetails.workoutId}/${exerciseId}`,
        exerciseData,
      );
      console.log(data)
      dispatch(saveWorkoutExercises([...workoutExercises.Exercises, data]));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  return {
    deleteWorkoutExercise,
    createNewExercise,
    createSuperset,
    getUserExercises,
    getExerciseDetails,
    addExercise,
  };
};
