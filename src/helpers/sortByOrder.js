const sortByOrder = (data) => {
    const sortedData = [...data];
  
    return sortedData.sort((a, b) => {
      const orderA = a.Order.position || (a.WorkoutExercise && a.WorkoutExercise.Order.position);
      const orderB = b.Order.position || (b.WorkoutExercise && b.WorkoutExercise.Order.position);
  
      return orderA - orderB;
    });
  };
  
  export default sortByOrder;
  