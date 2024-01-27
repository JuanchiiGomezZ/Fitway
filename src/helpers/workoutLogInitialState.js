export default function transformarArray(ejercicioArray) {
  return ejercicioArray
    .map((ejercicio) => {
      if (ejercicio.Exercises) {
        return ejercicio.Exercises.map((subEjercicio) => {
          return {
            id: subEjercicio.id,
            exerciseType: subEjercicio.exerciseType,
            superset: true,
            stats: subEjercicio.SupersetExercises[0].reps.map(() => {
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
          exerciseType: ejercicio.exerciseType,
          stats: ejercicio.WorkoutExercises[0].reps.map(() => {
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
