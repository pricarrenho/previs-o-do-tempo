export const dayOfTheWeek = (value: string) => {
  const nameOfTheDay = new Intl.DateTimeFormat(["pt-br"], {
    weekday: "long",
  }).format(new Date(`${value} 00:00:00`));

  const newNameOfTheDay = nameOfTheDay.replace("-feira", "");

  return newNameOfTheDay;
};
