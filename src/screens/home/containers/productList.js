import {View, Text, StyleSheet, KeyboardAvoidingView} from "react-native"
import React, {useEffect, useState} from "react"
import {FlatList} from "react-native-gesture-handler"
import ProductItem from "./productItem"
import {useDispatch, useSelector} from "react-redux"
import {getProducts} from "@redux/slices/product"
import {selectPagination, selectProducts} from "@redux/selector/product"

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
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Text style={styles.textTitle}>Tin đăng mới</Text>
        <KeyboardAvoidingView behavior={"height"}>
          <FlatList
            numColumns={2}
            data={products}
            ListHeaderComponent={() => <>{children}</>}
            columnWrapperStyle={styles.flatColumnWapper}
            contentContainerStyle={[styles.flatContent]}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            onEndReachedThreshold={0.1}
            onEndReached={handleOnEndReached}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {marginTop: 5, backgroundColor: "white"},
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginLeft: 10,
  },
  boxHeader: {marginTop: 10},
  flatContent: {marginHorizontal: 12, flex: 1},
  flatColumnWapper: {justifyContent: "space-between"},
})

export default ProductList
