import {View, FlatList, RefreshControl} from "react-native"
import React, {useEffect} from "react"
import ProductItem from "./productItem"
import Colors from "@common/Color"
import {useSelector, useDispatch} from "react-redux"
import {
  getProductsByCategory,
  resetProductByCategory,
} from "@redux/slices/product"
import {useRoute} from "@react-navigation/native"
import ProductColumnGrid from "./productIColumnItem"
import ListEmptyComponent from "./ListEmptyComponent"
import {
  selectProductByCategory,
  selectPaginationOfProductByCategory,
} from "@redux/selector/product"

const ProductList = ({children, isGrid}) => {
  const routes = useRoute()
  const {categoryId} = routes.params
  const [refreshing, setRefreshing] = React.useState(false)
  const dispatch = useDispatch()

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    wait(1000).then(() => {
      dispatch(resetProductByCategory())
      dispatch(getProductsByCategory({page: 1, category: categoryId}))
      setRefreshing(false)
    })
  }, [dispatch, categoryId])

  const data = useSelector(selectProductByCategory)
  const pagination = useSelector(selectPaginationOfProductByCategory)

  useEffect(() => {
    dispatch(getProductsByCategory({page: 1, category: categoryId}))
  }, [dispatch, categoryId])

  const handleOnEndReached = () => {
    let page = pagination.page

    dispatch(
      getProductsByCategory({
        page: ++page,
        category: categoryId,
      }),
    )
  }

  const renderGridItem = ({item}) => <ProductItem item={item} />
  const renderColumnItem = ({item}) => <ProductColumnGrid item={item} />

  return (
    <>
      {isGrid ? (
        <FlatList
          data={data}
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
          data={data}
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
