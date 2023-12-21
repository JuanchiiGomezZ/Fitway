export default findExerciseById = (exerciseId, workoutLog) => {
  for (const logEntry of workoutLog) {
    const exercise = logEntry.id === exerciseId;
    if (exercise) {
      return logEntry;
    }
  }
  return null;
};
