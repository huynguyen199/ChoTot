import {View, ScrollView, StyleSheet} from "react-native"
import React from "react"
import {Header, Icon} from "react-native-elements"

import ProductList from "./containers/productlist"
import ImageList from "./containers/imagelist"
import CategoryList from "./containers/categorylist"
import GiftList from "./containers/giftlist"
import Banner from "./containers/banner"
import SearchBar from "../../components/searchbar/search"

const Home = () => {
  return (
    <View style={{flex: 1}}>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default Home
