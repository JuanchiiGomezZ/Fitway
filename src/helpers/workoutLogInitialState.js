export default function transformarArray(ejercicioArray) {
  return ejercicioArray
    .map((ejercicio) => {
      if (ejercicio.Exercises) {
        return ejercicio.Exercises.map((subEjercicio) => {
          return {
            id: subEjercicio.id,
            exerciseType: subEjercicio.exerciseType,
            stats: subEjercicio.SupersetExercise.reps.map(() => {
              return {
                done: false,
                reps: "",
                weight: "",
              };
            }),
          };
        });
      } else {
        return {
          id: ejercicio.id,
          superset: true,
          exerciseType: ejercicio.exerciseType,
          stats: ejercicio.WorkoutExercise.reps.map(() => {
            return {
              done: false,
              reps: "",
              weight: "",
            };
          }),
        };
      }
    })
    .flat();
}
