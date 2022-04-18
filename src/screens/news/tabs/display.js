import {View, FlatList, StyleSheet, ActivityIndicator} from "react-native"
import React, {useEffect} from "react"
import Color from "@common/Color"
import NewsItem from "./containers/newsItem"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {getMyPostedProducts} from "@redux/slices/product"
import {useState} from "react"
import WithoutAccount from "./containers/withoutAccount"
import {getProfileInfo} from "../../../redux/slices/auth"
import LoadingDialog from "@components/loadingDialog"
import {selectProfileInfo} from "@redux/selector/auth"

const Display = () => {
  const data = useSelector((state) => state.product.myPostedProducts.data)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const userInfo = useSelector(selectProfileInfo)

  const pagination = useSelector(
    (state) => state.product.myPostedProducts.pagination,
  )

  useEffect(() => {
    dispatch(getProfileInfo())
    dispatch(getMyPostedProducts())
  }, [dispatch])

  const handleOnEndReached = () => {
    let page = pagination.page
    dispatch(getMyPostedProducts(++page))
  }

  if (userInfo === null) {
    return <WithoutAccount />
  }
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
        ListFooterComponent={
          pagination.page === pagination.totalPages && (
            <View style={styles.containerListFooter}>
              <ActivityIndicator size="large" color={Color.orange} />
            </View>
          )
        }
        // ListEmptyComponent={ListEmptyComponent}
      />

      <LoadingDialog onBackdropPress={setLoading} isVisible={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerListFooter: {alignItems: "center"},
  containers: {backgroundColor: Color.ghostWhite, flex: 1},
})

export default Display
