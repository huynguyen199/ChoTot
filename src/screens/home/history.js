import {View, Text, FlatList, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import Color from "@common/Color"
import {Header, Icon} from "react-native-elements"
import SearchBar from "@components/searchbar/index"
import {useNavigation} from "@react-navigation/native"
import Icons from "@common/Icon"
import HistoryItem from "./containers/history/historyItem"
import SearchProduct from "./searchProduct"
import {homePage} from "@common/navigator"
import {useSelector, useDispatch} from "react-redux"
import {getProductSearch} from "@redux/slices/product"
import _ from "lodash"
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
]

const History = () => {
  const products = useSelector((state) => state.product.searchProduct.data)

  const [search, setSearch] = useState("")

  const dispatch = useDispatch()
  // useEffect(() => {
  // }, [dispatch])
  const sendSearchersWord = _.debounce(
    () => dispatch(getProductSearch({page: 1, name: search})),
    100,
  )

  useEffect(() => {
    sendSearchersWord()
  }, [sendSearchersWord, search])

  const navigation = useNavigation()
  const onChangeSearch = (value) => {
    sendSearchersWord()
    setSearch(value)
  }

  const renderItem = ({item}) => <HistoryItem title={item.title} />
  const onSubmitSearch = () => {
    navigation.navigate(homePage.foundProduct)
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <View style={styles.containerLeft}>
            <Icon
              name={Icons.Ionicons.back}
              type="ionicon"
              color="black"
              size={30}
            />
            <SearchBar
              onSubmitEditing={onSubmitSearch}
              text={search}
              onChangeText={onChangeSearch}
              autoFocus
            />
          </View>
        }
        backgroundColor={"orange"}
      />
      {search.length > 0 ? (
        <SearchProduct search={search} products={products} />
      ) : (
        <>
          <View style={styles.boxHistoryRecent}>
            <View style={styles.boxRow}>
              <Icon
                name="newspaper-outline"
                type="ionicon"
                color="black"
                size={25}
              />
              <Text style={styles.txtSearch}>Tìm kiếm gần đây</Text>
            </View>

            <Text style={styles.txtDelete}>Xóa</Text>
          </View>
          {/* bar on top */}
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  containerLeft: {flexDirection: "row", alignItems: "center"},
  txtDelete: {color: "blue"},
  txtSearch: {marginLeft: 5, color: "black"},
  boxRow: {flexDirection: "row", alignItems: "center"},
  boxHistoryRecent: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.ghostWhite,
    padding: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
})
