/**
 * A component for rendering the list of Ascii faces.
 */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  SectionList,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EndOfCategory from './EndOfCategory';
import GettingDataReady from './functions/GettingDataReady';
import RenderAds from './RenderAds';
import RenderItem from './RenderItem';
import SortModal from './SortModal';
import {styles} from './Styles';
import {listItem, sortTypes} from './Types';
import {url} from './Url';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({navigation}) => {
  //  It makes the sorting modal visible.
  const [sortModalVisible, setSortModalVisible] = useState<boolean>(false);
  // An useState for defining the type of sorting.
  const [sortType, setSortType] = useState<sortTypes>(sortTypes.size);
  // A boolean for a time that data reaches the end. for showing the 'end of the category' message.
  const [dataReachedEnd, setDataReachedEnd] = useState<boolean>(false);
  // A boolean for showing the loading animation when the new data are coming from the server.
  const [loading, setLoading] = useState<boolean>(true);
  // Our modified data for showing in the sectionList is this.
  const [dataSection, setDataSection] = useState<listItem[] | null>();
  // We use it fo pagination.
  const [page, setPage] = useState<number>(1);

  /**
   * A listener for detecting the changes in the sorting of the list.
   */
  useEffect(() => {
    setSortModalVisible(false);
    setDataSection(null);
    page === 1 ? handlingData() : setPage(1);
  }, [sortType]);

  /**
   * By scrolling the list, SectionList adds a value of 1 to the page's value,
   * By changing the value of page, handlingData will be called.
   */
  useEffect(() => {
    handlingData();
  }, [page]);

  /**
   * A custom hook for customizing the header. more info at @link https://reactnavigation.org/docs/header-buttons.
   * By changing the navigation or sortType, header contents may be affected.
   */
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.header_right_button}
          onPress={() => setSortModalVisible(true)}>
          <Text style={styles.header_button_title}>
            {'Sort by:'}
            {sortType}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, sortType]);

  /**
   * An async function for fetching data from the server
   */
  const handlingData = async () => {
    try {
      await fetch(url + `/products?_sort=${sortType}&_page=${page}&_limit=100`)
        .then((response) => response.json())
        .then((result) => {
          // Checks resule from server has a value or not
          if (result && result.length === 0) {
            //If length of result is equal zero, means that data reached to end
            setDataReachedEnd(true);
          } else {
            // Else, we create an array and according to 'page' value set a new value to 'dataSection', or merge the new one with the past one
            const tmpl = GettingDataReady(result);
            page > 1 && dataSection
              ? setDataSection([...dataSection, ...tmpl])
              : setDataSection(tmpl);
          }
        });
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  /**
   * A function that will be called whenever 'SectionList' reaches to end.
   */
  const onEndReached = () => {
    setLoading(true);
    setPage(page + 1);
  };
  /**
   * According to readMe file included in the test file:
   * after every 20 products, we need to insert an advertisement from one of our sponsors.
   * The best interface that can handle this task correctly is SectionList. @link https://reactnative.dev/docs/sectionlist.
   * It can handle ads between products correctly.
   */
  return (
    <View style={styles.main_view}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safe_area}>
        <View style={loading ? styles.container_on_loading : styles.container}>
          {dataSection ? (
            <SectionList
              sections={dataSection}
              keyExtractor={(index) => index.toString()}
              onEndReached={onEndReached}
              ListFooterComponent={() => (
                <>{dataReachedEnd && <EndOfCategory />}</>
              )}
              onEndReachedThreshold={1}
              renderItem={RenderItem}
              extraData={sortType}
              renderSectionFooter={({section: {title}}) => RenderAds(title)}
            />
          ) : (
            <ActivityIndicator />
          )}
        </View>
        {loading && (
          <View style={styles.loading_conatianer}>
            <ActivityIndicator size={31} />
          </View>
        )}
      </SafeAreaView>
      <SortModal
        modalVisible={sortModalVisible}
        closeModal={() => setSortModalVisible(false)}
        setSortType={setSortType}
      />
    </View>
  );
};
export default Home;
