import {
  onChecking,
  onError,
  saveActiveWorkoutExercisesData,
} from "../../store/slices/workoutsSlice";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";

import { saveActiveRoutineWorkouts } from "../../store/slices/routinesSlice";

export default useWorkoutsStore = () => {
  const dispatch = useDispatch();
  const { activeRoutineId, activeRoutineWorkouts } = useSelector((state) => state.userRoutines);

  const getWorkoutsActive = async (routineId) => {
    try {
      const { data } = await axios.get(`/workout/allWorkout/${routineId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const newWorkout = async (name) => {
    try {
      const { data } = await axios.post(`/workout/newWorkout/${activeRoutineId}`, {
        name,
        order: activeRoutineWorkouts.length,
      });
      dispatch(saveActiveRoutineWorkouts([...activeRoutineWorkouts, data]));
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

  const getWorkoutsData = async (workoutId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.get(`/workout/${workoutId}`);
      const details = {
        routineId: data.RoutineId,
        workoutId: data.id,
        name: data.name,
        order: data.order,
      };
      const exercises = data.supersets.length != 0
        ? {
            exercises: [...data.exercises, ...data.supersets],
          }
        : { exercises: [...data.exercises] };
    
        dispatch(saveActiveWorkoutExercisesData({ details, exercises }));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  return { newWorkout, deleteWorkout, getWorkoutsActive, getWorkoutsData };
};
