import { saveWorkouts, onChecking, onError } from "../../store/slices/workoutsSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const useWorkoutsStore = () => {
  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state.workouts);


  
  return {}
};
