const sortByOrder = (data) => {
    const sortedData = [...data];
  
    return sortedData.sort((a, b) => {
      const orderA = a.order || (a.WorkoutExercise && a.WorkoutExercise.order);
      const orderB = b.order || (b.WorkoutExercise && b.WorkoutExercise.order);
  
      return orderA - orderB;
    });
  };
  
  export default sortByOrder;
  