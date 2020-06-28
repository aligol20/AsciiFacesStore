/**
 * Generates random and unique array Ids for Ads.
 * Due to test features:
 * Ads should be randomly selected, but a user must never see the same ad twice in a row.
 * But server produces just 10 URL of images,
 * Length of random number It does not matter, the important thing is the first digit of the random number.
 * so for creating the unique number, we should check the first digit of every random number that has been created.
 * @param number - number of ads id that should be produced
 */
const RandomAdsProducer = (number: number) => {
  let result: number[] = [];
  // Checks, if the number of generated ids is enough.

  while (result.length < number) {
    // Generates a random number between 10 and 100.
    const random = Math.floor(Math.random() * 100) + 10;
    // Generates the first digit of 'random'.
    const rest = random % 10;
    // Checks, if there is a random number in the 'result' :
    result.length > 0
      ? // Checks the first digit of recently generated number with the first digit of numbers that stored in the 'result'.
        !result.find((x) => x % 10 === rest) && result.push(random)
      : // If the 'result' is empty, it doesn't care and pushes the generated number without care.
        result.push(random);
  }
  return result;
};
export default RandomAdsProducer;
