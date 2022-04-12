import {View, FlatList, RefreshControl} from "react-native"
import React, {useEffect} from "react"
import ProductItem from "./productItem"
import Colors from "@common/Color"
import ProductColumnGrid from "./productIColumnItem"
import ListEmptyComponent from "./ListEmptyComponent"
import {useDispatch, useSelector} from "react-redux"
import {clearProductsFound, getProductFound} from "@redux/slices/product"

const ProductList = ({children, isGrid, wordSearch}) => {
  const [refreshing] = React.useState(false)

  const onRefresh = React.useCallback(() => {}, [])
  const products = useSelector((state) => state.product.searchFound.data)
  const dispatch = useDispatch()
  const pagination = useSelector(
    (state) => state.product.searchFound.pagination,
  )

  useEffect(() => {
    dispatch(getProductFound({page: 1, name: wordSearch}))
    return () => clearProductsFound()
  }, [wordSearch, dispatch])

  const handleOnEndReached = () => {
    let page = pagination.page
    let totolPages = pagination.totolPages
    if (totolPages > 1)
      dispatch(getProductFound({page: ++page, name: wordSearch}))
  }

  const renderGridItem = ({item}) => <ProductItem item={item} />
  const renderColumnItem = ({item}) => <ProductColumnGrid item={item} />

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
            <View style={{backgroundColor: Colors.white}}>{children}</View>
          }
          contentContainerStyle={{
            backgroundColor: Colors.ghostWhite,
          }}
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
          ListEmptyComponent={<ListEmptyComponent />}
          ListHeaderComponent={
            <View style={{backgroundColor: Colors.white}}>{children}</View>
          }
          contentContainerStyle={{
            backgroundColor: Colors.ghostWhite,
          }}
          onEndReached={handleOnEndReached}
        />
      )}
    </>
  )
}

export default ProductList
