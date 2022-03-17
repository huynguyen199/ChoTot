import {View, ScrollView, StyleSheet} from "react-native"
import React from "react"
import {Header, Icon} from "react-native-elements"

import ProductList from "./containers/productList"
import ImageList from "./containers/imageList"
import CategoryList from "./containers/categoryList"
import GiftList from "./containers/giftList"
import Banner from "./containers/banner"
import SearchBar from "@components/searchbar"
// import {Banner} from "@containers/banner"

const Home = () => {
  return (
    <View style={styles.containerHome}>
      {/* Header */}
      <Header
        leftComponent={<SearchBar />}
        backgroundColor={"orange"}
        rightComponent={
          <View style={styles.container}>
            <Icon
              name="newspaper-outline"
              type="ionicon"
              color="black"
              size={26}
            />
          </View>
        }
      />
      <ScrollView>
        <Banner />
        {/* gift list */}
        <GiftList />
        {/* categorylist */}
        <CategoryList />
        {/* list image */}
        <ImageList />
        {/* product list */}
        <ProductList />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  containerHome: {flex: 1},
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default Home
