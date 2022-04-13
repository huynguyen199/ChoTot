import {View, FlatList, RefreshControl, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import ProductItem from "./productItem"
import Colors from "@common/Color"
import ProductColumnGrid from "./productIColumnItem"
import ListEmptyComponent from "./ListEmptyComponent"
import {useDispatch, useSelector} from "react-redux"
import Loading from "@components/loading"
import {clearProductsFound, getProductFound} from "@redux/slices/product"
import ListFooterComponent from "./listFooterComponent"

const ProductList = ({children, isGrid, wordSearch}) => {
  const [refreshing] = React.useState(false)
  const [loading, setLoading] = useState(true)
  const onRefresh = React.useCallback(() => {}, [])
  const products = useSelector((state) => state.product.searchFound.data)
  const dispatch = useDispatch()
  const pagination = useSelector(
    (state) => state.product.searchFound.pagination,
  )

  useEffect(() => {
    dispatch(getProductFound({page: 1, name: wordSearch}))
      .unwrap()
      .then((result) => {
        if (result) {
          setLoading(false)
        }
      })
    return () => clearProductsFound()
  }, [wordSearch, dispatch])

  const handleOnEndReached = () => {
    let page = pagination.page
    let totalPages = pagination.totalPages
    if (totalPages > 1)
      dispatch(getProductFound({page: ++page, name: wordSearch}))
  }

  const renderGridItem = ({item}) => <ProductItem item={item} />
  const renderColumnItem = ({item}) => <ProductColumnGrid item={item} />

  return (
    <>
      {isGrid ? (
        loading ? (
          <Loading />
        ) : (
          <FlatList
            data={products}
            key={"*"}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={renderGridItem}
            keyExtractor={(item) => item._id}
            ListEmptyComponent={<ListEmptyComponent />}
            ListHeaderComponent={
              <View style={styles.listHeaderContainer}>{children}</View>
            }
            ListFooterComponent={
              <ListFooterComponent pagination={pagination} />
            }
            contentContainerStyle={styles.contentContainerStyleGrid}
            onEndReached={handleOnEndReached}
          />
        )
      ) : loading ? (
        <Loading />
      ) : (
        <FlatList
          data={products}
          key={"#"}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={renderColumnItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          ListFooterComponent={<ListFooterComponent pagination={pagination} />}
          ListEmptyComponent={<ListEmptyComponent />}
          ListHeaderComponent={
            <View style={styles.containerHeaderColumn}>{children}</View>
          }
          contentContainerStyle={styles.contentContainerStyleColumn}
          onEndReached={handleOnEndReached}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  contentContainerStyleColumn: {
    backgroundColor: Colors.ghostWhite,
  },
  containerHeaderColumn: {backgroundColor: Colors.white},
  contentContainerStyleGrid: {
    backgroundColor: Colors.ghostWhite,
  },
  listHeaderContainer: {backgroundColor: Colors.white},
})
export default ProductList
