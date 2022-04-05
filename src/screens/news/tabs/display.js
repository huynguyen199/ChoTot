import {View, FlatList, StyleSheet} from "react-native"
import React, {useEffect} from "react"
import Color from "@common/Color"
import NewsItem from "./containers/newsItem"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import ListEmptyComponent from "../containers/news/ListEmptyComponent"
import {getMyPostedProducts} from "@redux/slices/product"

const Display = () => {
  const data = useSelector((state) => state.product.myPostedProducts.data)
  console.log("DEBUG: - file: display.js - line 12 - Display - data", data)

  const pagination = useSelector(
    (state) => state.product.myPostedProducts.pagination,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyPostedProducts())
    // dispatch(getProductsByCategory({page: 1, category: categoryId}))
  }, [dispatch])

  const handleOnEndReached = () => {
    let page = pagination.page
    dispatch(getMyPostedProducts(++page))
  }
  // const pagination = useSelector(selectPaginationOfProductByCategory)
  const renderItem = ({item}) => <NewsItem item={item} />
  return (
    <View style={styles.containers}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        onEndReached={handleOnEndReached}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containers: {backgroundColor: Color.ghostWhite, flex: 1},
})

export default Display
