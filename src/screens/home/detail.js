import {View, StyleSheet} from "react-native"
import React, {useEffect} from "react"
import Banner from "@components/banner"
import {Divider, Header} from "react-native-elements"
import Footer from "./containers/detail/footer"
import InfoProduct from "./containers/detail/infoProduct"
import InfoPage from "./containers/detail/infoPage"
import QuestionList from "./containers/detail/questionList"
import InfoArea from "./containers/detail/infoArea"
import SocialList from "./containers/detail/socialList"
import NewsProduct from "./containers/detail/productList"
import Color from "@common/Color"
import LeftHeader from "./containers/detail/leftHeader"
import RightHeader from "./containers/detail/rightHeader"
import {useRoute} from "@react-navigation/native"
import {useDispatch, useSelector} from "react-redux"
import {getProductDetails} from "@redux/slices/product"
import {clearDetails} from "@redux/slices/product"
import {selectProductDetails} from "@redux/selector/product"

const Detail = () => {
  const route = useRoute()
  const {productId} = route.params
  const dispatch = useDispatch()
  const itemDetails = useSelector(selectProductDetails)

  useEffect(() => {
    dispatch(getProductDetails(productId))
    return () => {
      dispatch(clearDetails())
    }
  }, [dispatch, productId])

  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <Header
          leftComponent={<LeftHeader />}
          backgroundColor={Color.orange}
          rightComponent={<RightHeader />}
        />

        <NewsProduct>
          <Banner
            data={[{id: "keyid1", url: itemDetails.imageUrl}]}
            height={250}
          />
          <View style={styles.groupPage}>
            <InfoProduct itemDetails={itemDetails} />
            <Divider width={0.5} color={Color.grey} />
            <InfoPage itemDetails={itemDetails} />
            <Divider width={0.5} color={Color.grey} />
            <QuestionList itemDetails={itemDetails} />
            <InfoArea itemDetails={itemDetails} />
            <SocialList itemDetails={itemDetails} />
          </View>
        </NewsProduct>
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
