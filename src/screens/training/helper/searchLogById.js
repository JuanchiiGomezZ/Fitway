import { useSelector } from "react-redux";

export default findExerciseById = (exerciseId) => {
  const { workoutLog } = useSelector((state) => state.training);
  for (const logEntry of workoutLog) {
    const exercise = logEntry.id === exerciseId;
    if (exercise) {
      return logEntry;
    }
  }
  return null;
};
