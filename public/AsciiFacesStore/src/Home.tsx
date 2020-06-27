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
  const [sortModalVisible, setSortModalVisible] = useState<boolean>(false);
  const [sortType, setSortType] = useState<sortTypes>(sortTypes.size);
  const [dataReachedEnd, setDataReachedEnd] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataSection, setDataSection] = useState<listItem[] | null>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setSortModalVisible(false);
    setDataSection(null);
    page === 1 ? handlingData() : setPage(1);
  }, [sortType]);

  useEffect(() => {
    handlingData();
  }, [page]);

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

  const handlingData = async () => {
    try {
      await fetch(url + `/products?_sort=${sortType}&_page=${page}&_limit=100`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result, 'resultresult');
          if (result && result.length === 0) {
            setDataReachedEnd(true);
          } else {
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

  const onEndReached = () => {
    setLoading(true);
    setPage(page + 1);
  };

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
