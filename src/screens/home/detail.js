import {View, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import Banner from "@components/banner"
import {Divider, Header} from "react-native-elements"
import Footer from "./components/detail/footer"
import InfoProduct from "./components/detail/infoProduct"
import InfoPage from "./components/detail/infoPage"
import InfoArea from "./components/detail/infoArea"
import NewsProduct from "./components/detail/productList"
import Color from "@common/Color"
import LeftHeader from "./components/detail/leftHeader"
import RightHeader from "./components/detail/rightHeader"
import {useNavigation, useRoute} from "@react-navigation/native"
import {useDispatch, useSelector} from "react-redux"
import {getProductDetails} from "@redux/slices/product"
import {clearDetails} from "@redux/slices/product"
import {selectProductDetails} from "@redux/selector/product"
import Loading from "@components/loading"

const Detail = () => {
  const route = useRoute()
  const {productId} = route.params
  const dispatch = useDispatch()
  const itemDetails = useSelector(selectProductDetails)
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(true)

  useEffect(() => {
    dispatch(getProductDetails(productId))
      .unwrap()
      .then(() => {
        setRefreshing(false)
      })

    return () => {
      dispatch(clearDetails())
    }
  }, [dispatch, productId])

  const onBackProducts = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <Header
          leftComponent={<LeftHeader onClose={onBackProducts} />}
          backgroundColor={Color.orange}
          rightComponent={<RightHeader />}
        />
        {refreshing ? (
          <Loading />
        ) : (
          <NewsProduct productId={productId}>
            <Banner
              data={[{id: "keyid12", url: itemDetails.imageUrl}]}
              height={250}
            />
            <View style={styles.groupPage}>
              <InfoProduct itemDetails={itemDetails} />
              <Divider width={0.5} color={Color.grey} />
              <InfoPage itemDetails={itemDetails} />
              <Divider width={0.5} color={Color.grey} />
              {/* <QuestionList itemDetails={itemDetails} /> */}
              <InfoArea itemDetails={itemDetails} />
              {/* <SocialList itemDetails={itemDetails} /> */}
            </View>
          </NewsProduct>
        )}
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  groupPage: {marginHorizontal: 15},
  groupContainer: {flex: 1},
})
export default Detail
