import { onChecking, onError, saveActiveWorkoutExercises } from "../../store/slices/workoutsSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import API_URL from "../../helpers/API_URL";
import { saveActiveRoutineWorkouts } from "../../store/slices/routinesSlice";

export default useWorkoutsStore = () => {
  const dispatch = useDispatch();
  const { activeRoutineId, activeRoutineWorkouts } = useSelector((state) => state.userRoutines);

  const getWorkoutsActive = async (routineId) => {
    try {
      const { data } = await axios.get(`${API_URL}/workout/allWorkout/${routineId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const newWorkout = async (name) => {
    try {
      const { data } = await axios.post(`${API_URL}/workout/newWorkout/${activeRoutineId}`, {
        name,
      });
      dispatch(saveActiveRoutineWorkouts([...activeRoutineWorkouts, data]));
      return data;
    } catch (error) {
      dispatch(onError(error.response.data?.message));
    }
  };

  const deleteWorkout = async (workoutId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.delete(`${API_URL}/workout/delete/${workoutId}`);

      const updateWorkouts = activeRoutineWorkouts.filter((element) => element.id !== workoutId);
      dispatch(saveActiveRoutineWorkouts(updateWorkouts));
    } catch (error) {
      dispatch(onError(error.response.data?.message));
    }
  };

  const getWorkoutsData = async (workoutId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.get(`${API_URL}/workout/${workoutId}`);
      dispatch(saveActiveWorkoutExercises(data));
    } catch (error) {
      dispatch(onError(error.response.data?.message));
    }
  };

  return { newWorkout, deleteWorkout, getWorkoutsActive, getWorkoutsData };
};
