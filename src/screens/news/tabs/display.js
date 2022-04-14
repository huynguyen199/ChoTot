import {View, FlatList, StyleSheet} from "react-native"
import React, {useEffect} from "react"
import Color from "@common/Color"
import NewsItem from "./containers/newsItem"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import ListEmptyComponent from "../containers/news/ListEmptyComponent"
import {getMyPostedProducts} from "@redux/slices/product"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useState} from "react"
import WithoutAccount from "./containers/withoutAccount"
import LoadingDialog from "../../../components/loadingDialog"
const Display = () => {
  const data = useSelector((state) => state.product.myPostedProducts.data)
  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(false)

  const pagination = useSelector(
    (state) => state.product.myPostedProducts.pagination,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      if (token) {
        dispatch(getMyPostedProducts())
        setIsLogged(false)
      } else {
        setIsLogged(true)
      }
    })

    dispatch(getMyPostedProducts())
  }, [dispatch])

  const handleOnEndReached = () => {
    let page = pagination.page
    dispatch(getMyPostedProducts(++page))
  }
  if (isLogged) {
    return <WithoutAccount />
  }

  // const pagination = useSelector(selectPaginationOfProductByCategory)
  const renderItem = ({item}) => (
    <NewsItem setLoading={setLoading} item={item} />
  )
  return (
    <View style={styles.containers}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        onEndReached={handleOnEndReached}
        ListEmptyComponent={ListEmptyComponent}
      />

      <LoadingDialog onBackdropPress={setLoading} isVisible={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  containers: {backgroundColor: Color.ghostWhite, flex: 1},
})

export default Display
