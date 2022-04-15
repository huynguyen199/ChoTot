import {StyleSheet} from "react-native"
import React, {useEffect} from "react"
import {FlatList} from "react-native-gesture-handler"
import ProductItem from "./productItem"
import {getRelatedProducts} from "@redux/slices/product"
import Color from "@common/Color"
import {useDispatch, useSelector} from "react-redux"

const ProductList = ({children, productId}) => {
  const renderItem = (data) => <ProductItem item={data.item} />
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.relatedProduct.data)

  useEffect(() => {
    dispatch(getRelatedProducts())
  }, [dispatch])

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
