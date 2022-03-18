import {View, Text, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import {FlatList} from "react-native-gesture-handler"
import ProductItem from "./productItem"
import {useDispatch, useSelector} from "react-redux"
import {getProducts} from "@redux/slices/product"
import {selectPagination, selectProducts} from "@redux/selector/product"
import Color from "@common/Color"

const ProductList = ({children}) => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const product = useSelector(selectProducts)
  const pagination = useSelector(selectPagination)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    const page = pagination.page
    const totalPages = pagination.totalPages
    if (page <= totalPages) {
      setProducts((preState) => [...preState, ...product])
    }
  }, [pagination, product])

  const handleOnEndReached = () => {
    let page = pagination.page
    const totalPages = pagination.totalPages
    if (page < totalPages) {
      page++
      dispatch(getProducts(page))
    }
  }

  const renderItem = ({item}) => <ProductItem item={item} />

  return (
    <FlatList
      numColumns={2}
      data={products}
      ListHeaderComponent={() => (
        <>
          {children}
          <View style={styles.containerNews}>
            <Text style={styles.textTitle}>Tin đăng mới</Text>
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
