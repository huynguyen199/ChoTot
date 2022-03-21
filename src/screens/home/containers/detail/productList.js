import {StyleSheet} from "react-native"
import React, {useEffect} from "react"
import {FlatList} from "react-native-gesture-handler"
import ProductItem from "./productItem"
import {getProducts, resetProducts} from "@redux/slices/product"
import {selectPagination, selectProducts} from "@redux/selector/product"
import Color from "@common/Color"
import {useDispatch, useSelector} from "react-redux"

const ProductList = ({children}) => {
  const renderItem = (data) => <ProductItem item={data.item} />
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const pagination = useSelector(selectPagination)

  useEffect(() => {
    dispatch(resetProducts())
    dispatch(getProducts())
  }, [dispatch])

  const handleOnEndReached = () => {
    let page = pagination.page
    dispatch(getProducts(++page))
  }
  return (
    <FlatList
      numColumns={2}
      data={products}
      ListHeaderComponent={() => <>{children}</>}
      columnWrapperStyle={styles.flatColumnWapper}
      contentContainerStyle={styles.flatContent}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      onEndReachedThreshold={0.1}
      onEndReached={handleOnEndReached}
    />
  )
}
const styles = StyleSheet.create({
  container: {},
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: Color.black,
    marginLeft: 5,
  },
  boxHeader: {backgroundColor: Color.white},
  flatContent: {marginHorizontal: 0},
  flatColumnWapper: {
    justifyContent: "space-evenly",
    backgroundColor: Color.ghostWhite,
  },
  boxTitle: {backgroundColor: Color.white, padding: 10},
})

export default ProductList
