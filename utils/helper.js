export const generateRandomNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(randomNumber);
  if (randomNumber === exclude)
    return generateRandomNumberBetween(min, max, exclude);
  return randomNumber;
};
