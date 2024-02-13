import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  onLoading,
  onError,
  cleanWorkoutLog,
  onSuccessfulRequest,
  saveActiveTrainingData,
} from "../../store/slices/trainingSlice";
import { storage } from "../../helpers/storage";

export default useTrainingStore = () => {
  const dispatch = useDispatch();
  const { workoutLog, activeTrainingDetails, activeTrainingExercise, numActiveExercise } = useSelector(
    (state) => state.training,
  );

  const newTrainingLog = async () => {
    const date = storage.getString("workout_startDate_training");

    const bodyReq = {
      date,
      time: "3876",
      data: workoutLog,
    };

    try {
      dispatch(onLoading());
      const { data } = await axios.post(`/logs/newLogs/${activeTrainingDetails.workoutId}`, bodyReq);
      dispatch(onSuccessfulRequest());
      return data;
    } catch (error) {
      dispatch(onError(error.response.data || error));
    }
  };

  const getTrainingData = async (workoutId) => {
    dispatch(onLoading());
    try {
      const { data } = await axios.get(`/workout/show-by-id/${workoutId}`);

      const details = {
        routineId: data.RoutineId,
        workoutId: data.id,
        name: data.name,
      };

      const Exercises =
        data.SuperSets.length !== 0 ? [...data.Exercises, ...data.SuperSets] : data.Exercises;

      dispatch(saveActiveTrainingData({ details, Exercises }));
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  return { newTrainingLog, getTrainingData };
};
