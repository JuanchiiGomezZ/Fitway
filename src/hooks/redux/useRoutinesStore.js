import { saveRoutines, onChecking, onError } from "../../store/slices/routinesSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const useRoutinesStore = () => {
  const dispatch = useDispatch();
  const { routines } = useSelector((state) => state.routines);


  
  return {}
};
