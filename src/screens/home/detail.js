import {View, StyleSheet, ScrollView} from "react-native"
import React from "react"
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

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <Header
          leftComponent={<LeftHeader />}
          backgroundColor={Color.orange}
          rightComponent={<RightHeader />}
        />
        <ScrollView>
          <Banner height={250} />
          <View style={styles.groupPage}>
            <InfoProduct />
            <Divider width={0.5} color={Color.grey} />
            <InfoPage />
            <Divider width={0.5} color={Color.grey} />
            <QuestionList />
            <InfoArea />
            <SocialList />
          </View>
          <NewsProduct />
        </ScrollView>
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
