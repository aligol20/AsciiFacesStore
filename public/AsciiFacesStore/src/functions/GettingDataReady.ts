import RandomAdsProducer from './RandomAdsProducer';
import RenderItem from '../RenderItem';
import {listItem} from '../Types';

const GettingDataReady = (
  json: {id: string; size: number; price: number}[],
) => {
  let b: listItem[] = [];

  if (json && json.length > 0) {
    const counter = json.length / 20;
    const adsNumber = RandomAdsProducer(counter);
    for (let i = 0; i < counter; i++) {
      const end = (i + 1) * 20;
      const first = i * 20;
      b.push({
        title: adsNumber[i].toString(),
        data: [json.slice(first, end)],
      });
    }
  }

  //   const checkGoh: {
  //     title: string;
  //     data: [][];
  //     renderItem: (item: any) => JSX.Element;
  //   }[] = dataSection ? [...dataSection, ...b] : b;
  //   checkGoh.length !== dataSection?.length
  //     ? setDataSection(checkGoh)
  //     : setDataReachedEnd(true);
  //   setLoading(false);

  return b;
};
export default GettingDataReady;
