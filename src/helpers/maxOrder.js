export default maxOrder = (data) => {
  return data.reduce((max, item) => {
    let order = 0;

    if (item.order) {
      order = Math.max(order, item.order);
    }
    if (item.WorkoutExercise && item.WorkoutExercise.order) {
      order = Math.max(order, item.WorkoutExercise.order);
    }

    return Math.max(max, order) + 1;
  }, 0);
};
