/**
 * A function for producing the suitable array for products grid.
 * It creates an ads random Id for every 20 products.
 */
import {listItem} from '../Types';
import RandomAdsProducer from './RandomAdsProducer';

/**
 *
 * @param json received data from server
 */
const GettingDataReady = (
  json: {id: string; size: number; price: number}[],
) => {
  // An array for serctionList input
  let b: listItem[] = [];
  //Checks if json has true value.
  if (json && json.length > 0) {
    // Divides it to 20, to add ads id in every part of Twenty products.
    const counter = json.length / 20;
    // For every 20 parts products, creates a new random and unique ads id.
    const adsNumber = RandomAdsProducer(counter);

    for (let i = 0; i < counter; i++) {
      const end = (i + 1) * 20;
      const first = i * 20;
      // pushes Ads id as a title.
      b.push({
        title: adsNumber[i].toString(),
        //pushes 20 products information as a data
        data: [json.slice(first, end)],
      });
    }
  }

  return b;
};
export default GettingDataReady;
