export const minMax = (min: number, max: number) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export const getRandomColor = (colors: Array<string>) => {
  const index = parseInt(Math.random() * (colors.length), 10);
  return colors[index];
};
