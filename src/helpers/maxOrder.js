export default maxOrder = (data) => {
  return data.reduce((max, item) => {
    let order = 0;

    if (item.order) {
      order = Math.max(order, item.order);
    }
    if (item.workoutExercise && item.workoutExercise.order) {
      order = Math.max(order, item.workoutExercise.order);
    }

    return Math.max(max, order) + 1;
  }, 0);
};
