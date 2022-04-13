import {View, FlatList, StyleSheet} from "react-native"
import React, {useEffect, useRef, useState, useCallback} from "react"
import Color from "@common/Color"
import {Header, Icon} from "react-native-elements"
import SearchBar from "@components/searchbar"
import {useIsFocused, useNavigation} from "@react-navigation/native"
import Icons from "@common/Icon"
import {homePage} from "@common/navigator"
import {useSelector, useDispatch} from "react-redux"
import {getProductSearch} from "@redux/slices/product"
import _ from "lodash"
import SearchItem from "./containers/searchItem/historyItem"
import Loading from "../../components/loading"

const SearchProduct = () => {
  const products = useSelector((state) => state.product.searchProduct.data)

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const textInput = useRef(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendSearchersWord = useCallback(
    _.debounce(
      (val) =>
        dispatch(getProductSearch({page: 1, name: val}))
          .unwrap()
          .then((result) => {
            if (result) {
              setLoading(false)
            }
          }),
      500,
    ),
    [],
  )

  useEffect(() => {
    if (isFocused) {
      textInput.current.focus()
    }
  }, [isFocused])

  const onChangeSearch = (value) => {
    sendSearchersWord(value)
    setSearch(value)
    setLoading(true)
  }

  const renderItem = ({item}) => <SearchItem item={item} />
  const onSubmitSearch = () => {
    navigation.navigate(homePage.foundProduct, {wordSearch: search})
  }
  const onBackHome = () => {
    navigation.goBack()
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
              onPress={onBackHome}
              size={30}
            />
            <SearchBar
              onSubmitEditing={onSubmitSearch}
              text={search}
              onChangeText={onChangeSearch}
              textInputRef={textInput}
            />
          </View>
        }
        backgroundColor={"orange"}
      />

      {/* bar on top */}
      {loading ? (
        search.length > 0 && <Loading />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  )
}

export default SearchProduct

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
    backgroundColor: "white",
  },
})
