const seededGenerator = (date, hour) => {
  const m = 9;
  const dateObject = new Date(date);
  const d = (dateObject.getDate());
  const result = (d + hour) % m / 10;

  return result;
}

export const fetchAPI = (date) => {
  const result = ["--- Select a Time ---"];

  for (let hour = 15; hour <= 23; hour++) {
    const shouldPushHour = seededGenerator(date, hour) < 0.5;
    const shouldPushHalfHour = seededGenerator(date, hour + 7) < 0.5;

    if (shouldPushHour) result.push(`${hour}:00`);
    if (shouldPushHalfHour) result.push(`${hour}:30`);
  }

  return result;
};

export const submitAPI = formData => true;