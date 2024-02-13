const sortByOrder = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => {
    const orderA = a.WorkoutExercise.position || a.position;
    const orderB = b.WorkoutExercise.position || b.position;

    return orderA - orderB;
  });
};

export default sortByOrder;
