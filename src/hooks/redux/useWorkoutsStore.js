import { saveWorkouts, onChecking, onError } from "../../store/slices/workoutsSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default useWorkoutsStore = () => {
  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state.workouts);

  const newWorkout = (name) => {
    const wk = {
      name,
      muscles: ["Quadriceps", "Chest", "Biceps"],
      id: Math.floor(Math.random() * 101),
    };
    const updatedWorkouts = [...workouts, wk];
    dispatch(saveWorkouts(updatedWorkouts));
  };

  const delteWorkout = (id) => {
    const updatedWorkouts = workouts.filter((item) => item.id != id);
    dispatch(saveWorkouts(updatedWorkouts));
  };

  return { newWorkout, delteWorkout };
};
