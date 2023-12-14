export default ExerciseTypeConvert = (type) => {
  if (type == "ExerciseWithoutWeight") {
    return "Bodyweight + Reps";
  } else if (type == "ExerciseWithWeight") {
    return "Weight + Reps";
  } else if (type == "ExerciseOfDuration") {
    return "Duration + Reps";
  }
};
