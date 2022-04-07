import {View, Text, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import {FlatList} from "react-native-gesture-handler"
import ProductItem from "./productItem"
import {useDispatch, useSelector} from "react-redux"
import {getProducts} from "@redux/slices/product"
import {selectPagination, selectProducts} from "@redux/selector/product"
import Color from "@common/Color"
import {useTranslation} from "react-i18next"
import Loading from "@components/loading"

const ProductList = ({children}) => {
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(true)
  const product = useSelector(selectProducts)
  const pagination = useSelector(selectPagination)
  const {t} = useTranslation()

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then(() => {
        setRefreshing(false)
      })
  }, [dispatch])

  const handleOnEndReached = () => {
    let page = pagination.page
    dispatch(getProducts(++page))
  }

  const renderItem = ({item}) => <ProductItem item={item} />

  if (refreshing) {
    return <Loading />
  }
  return (
    <FlatList
      numColumns={2}
      data={product}
      ListHeaderComponent={() => (
        <>
          {children}
          <View style={styles.containerNews}>
            <Text style={styles.textTitle}>{t("home:news")}</Text>
          </View>
        </>
      )}
      ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
      columnWrapperStyle={styles.flatColumnWapper}
      contentContainerStyle={styles.flatContent}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      onEndReachedThreshold={0.1}
      style={styles.listStyle}
      onEndReached={handleOnEndReached}
    />
  )
}
const styles = StyleSheet.create({
  container: {marginTop: 5, backgroundColor: Color.white},
  containerNews: {flex: 1, backgroundColor: Color.white, marginTop: 10},
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginLeft: 10,
    marginTop: 10,
  },
  boxHeader: {marginTop: 10},
  flatContent: {marginHorizontal: 0},
  flatColumnWapper: {justifyContent: "space-evenly"},
  ListHeaderComponentStyle: {
    backgroundColor: Color.ghostWhite,
  },
  listStyle: {backgroundColor: Color.white},
})

export default ProductList
