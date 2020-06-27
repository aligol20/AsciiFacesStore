const RandomAdsProducer = (number: number) => {
  const adsId = Math.floor(Math.random() * 1000);
  let result: number[] = [];
  while (result.length < number) {
    const random = Math.floor(Math.random() * 100) + 10;
    const rest = random % 10;

    result.length > 0
      ? !result.find((x) => x % 10 === rest) && result.push(random)
      : result.push(random);
  }
  return result;
};
export default RandomAdsProducer;
