import {FlatList, RefreshControl, StyleSheet} from "react-native"
import React, {useEffect} from "react"
import ProductItem from "./productItem"
import Colors from "@common/Color"
import ProductColumnGrid from "./productIColumnItem"
import ListEmptyComponent from "./ListEmptyComponent"
import {useDispatch, useSelector} from "react-redux"
import Loading from "@components/loading"
import {clearProductsFound, getProductFound} from "@redux/slices/product"
import ListFooterComponent from "./listFooterComponent"
import {showLoading, hideLoading} from "../../../../redux/slices/loading"
import ListHeaderComponent from "./listHeaderComponent"

const ProductList = ({children, isGrid, wordSearch}) => {
  const [refreshing] = React.useState(false)
  const onRefresh = React.useCallback(() => {}, [])
  const products = useSelector((state) => state.product.searchFound.data)
  const loading = useSelector((state) => state.progress.loading)

  const dispatch = useDispatch()
  const pagination = useSelector(
    (state) => state.product.searchFound.pagination,
  )

  useEffect(() => {
    dispatch(showLoading())
    dispatch(getProductFound({page: 1, name: wordSearch}))
      .unwrap()
      .then((result) => {
        if (result) {
          dispatch(hideLoading())
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

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {isGrid ? (
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
            <ListHeaderComponent>{children}</ListHeaderComponent>
          }
          ListFooterComponent={<ListFooterComponent pagination={pagination} />}
          contentContainerStyle={styles.contentContainerStyleGrid}
          onEndReached={handleOnEndReached}
        />
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
            <ListHeaderComponent>{children}</ListHeaderComponent>
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
})
export default ProductList
