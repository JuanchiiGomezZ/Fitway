import {
  onChecking,
  saveExerciseDetail,
  saveUserExercises,
  onError,
} from "../../store/slices/exercisesSlice";
import { saveActiveWorkoutExercises } from "../../store/slices/workoutsSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import API_URL from "../../helpers/API_URL";

export default useExercisesStore = () => {
  const dispatch = useDispatch();
  const { activeWorkoutExercises, activeWorkoutDetails } = useSelector((state) => state.workouts);
  const { user } = useSelector((state) => state.auth);

  const deleteWorkoutExercise = async (exerciseId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.delete(
        `${API_URL}/exercise/deleteExercise/${exerciseId.id}/${user.id}`,
      );
      const updateExercises = activeWorkoutExercises.exercises.filter(
        (element) => element.id !== exerciseId.id,
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
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(onError(error.response.data?.message));
    }
  };

  return { deleteWorkoutExercise, createNewExercise };
};
