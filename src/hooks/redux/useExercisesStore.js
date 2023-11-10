import { onChecking, saveUserExercises, onError } from "../../store/slices/exercisesSlice";
import { saveActiveWorkoutExercises } from "../../store/slices/workoutsSlice";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import API_URL from "../../helpers/API_URL";
import useWorkoutsStore from "./useWorkoutsStore";

export default useExercisesStore = () => {
  const { getWorkoutsData } = useWorkoutsStore();
  const dispatch = useDispatch();
  const { activeWorkoutExercises, activeWorkoutDetails } = useSelector((state) => state.workouts);
  const { user } = useSelector((state) => state.auth);

  const deleteWorkoutExercise = async (exerciseId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.delete(
        `${API_URL}/exercise/deleteExercise/${exerciseId}/${user.id}`,
      );
      const updateExercises = activeWorkoutExercises.exercises.filter(
        (element) => element.id !== exerciseId,
      );
      dispatch(saveActiveWorkoutExercises(updateExercises));
    } catch (error) {
      console.log(error.response.data);
      dispatch(onError(error.response.data?.message));
    }
  };

  const createNewExercise = async (bodyData) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/exercise/newExercise/${user.id}/${activeWorkoutDetails.workoutId}`,
        bodyData,
      );
      dispatch(saveActiveWorkoutExercises([...activeWorkoutExercises.exercises, data]));
    } catch (error) {
      dispatch(onError(error.response.data?.message));
    }
  };

  const createSuperset = async (exercisesIds) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/superset/newSuperset/${activeWorkoutDetails.workoutId}`,
        { exercisesIds },
      );
      // const updateExercises = activeWorkoutExercises.exercises.filter(
      //   (element) => !exercisesIds.includes(element.id),
      // );
      // dispatch(saveActiveWorkoutExercises([...updateExercises, data]));
      getWorkoutsData(activeWorkoutDetails.workoutId);
    } catch (error) {
      console.log(error);
      dispatch(onError(error.response.data?.message));
    }
  };

  const getUserExercises = async () => {
    dispatch(onChecking());
    try {
      const { data } = await axios.get(`${API_URL}/exercise/findAll/${user.id}`);
      dispatch(saveUserExercises(data));
    } catch (error) {
      dispatch(onError(error.response.data?.message));
    }
  };

  return { deleteWorkoutExercise, createNewExercise, createSuperset, getUserExercises };
};
