import { onChecking, onError, saveWorkoutData } from "../../store/slices/workoutsSlice";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";

import { saveActiveRoutineWorkouts } from "../../store/slices/routinesSlice";
import { saveActiveWorkoutData, onLoading } from "../../store/slices/trainingSlice";

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

  const getWorkoutData = async (workoutId) => {
    dispatch(onChecking());
    try {
      const { data } = await axios.get(`/workout/${workoutId}`);
      const details = {
        routineId: data.RoutineId,
        workoutId: data.id,
        name: data.name,
        order: data.order,
      };
      const Exercises =
        data.Supersets.length != 0
          ? { Exercises: [...data.Exercises, ...data.Supersets] }
          : { Exercises: [...data.Exercises] };

      dispatch(saveWorkoutData({ details, Exercises }));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const getWorkoutTrainingData = async (workoutId) => {
    dispatch(onLoading());
    try {
      const { data } = await axios.get(`/workout/${workoutId}`);
      const details = {
        routineId: data.RoutineId,
        workoutId: data.id,
        name: data.name,
        order: data.order,
      };
      const Exercises = {
        Exercises:
          data.Supersets.length !== 0
            ? [...data.Exercises, ...data.Supersets]
            : [...data.Exercises],
      };
      dispatch(saveActiveWorkoutData({ details, Exercises }));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  return { newWorkout, deleteWorkout, getWorkoutsActive, getWorkoutData, getWorkoutTrainingData };
};
