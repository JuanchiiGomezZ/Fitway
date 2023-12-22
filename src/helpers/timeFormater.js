export const convertToHourMinutesSeconds = (time) => {
  const minutes = Math.floor(time / 60) % 60; // Se agrega % 60 para asegurar que los minutos estén entre 0 y 59
  const seconds = time % 60;
  const hours = Math.floor(time / 3600); // Se calculan las horas dividiendo entre 3600 (60 segundos * 60 minutos)
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export const convertToMinutesSeconds = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  if (time <= 0) return "00:00";
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const convertToMinutes = (value) => {
  if (value == 0 || !value) {
    return "OFF";
  } else if (value >= 60) {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    if (seconds == 0) {
      return `${minutes}m 00s`;
    }
    return `${minutes}m ${seconds}s`;
  } else {
    return `${value}s`;
  }
};
