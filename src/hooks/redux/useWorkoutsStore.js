import { onChecking, onError, saveWorkoutData } from "../../store/slices/workoutsSlice";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { saveActiveRoutineWorkouts } from "../../store/slices/routinesSlice";

export default useWorkoutsStore = () => {
  const dispatch = useDispatch();
  const { activeRoutineId, activeRoutineWorkouts } = useSelector((state) => state.userRoutines);

  const getWorkoutsActive = async (routineId) => {
    try {
      const { data } = await axios.get(`/workout/show-all-in-routine/${routineId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const newWorkout = async (name) => {
    try {
      const { data } = await axios.post(`/workout/create/${activeRoutineId}`, {
        name,
      });
      dispatch(saveActiveRoutineWorkouts([...activeRoutineWorkouts, { ...data, muscles: [] }]));
      return data;
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const deleteWorkout = async (workoutId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.delete(`/workout/delete/${workoutId}`);

      const updateWorkouts = activeRoutineWorkouts.filter((element) => element.id !== workoutId);
      dispatch(saveActiveRoutineWorkouts(updateWorkouts));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const getWorkoutData = async (workoutId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.get(`/workout/show-by-id/${workoutId}`);
      const details = {
        routineId: data.RoutineId,
        workoutId: data.id,
        name: data.name,
      };
      const Exercises =
        data.SuperSets.length !== 0 ? [...data.Exercises, ...data.SuperSets] : data.Exercises;

      dispatch(saveWorkoutData({ details, Exercises }));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  return { newWorkout, deleteWorkout, getWorkoutsActive, getWorkoutData };
};
