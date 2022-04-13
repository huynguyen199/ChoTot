import {View, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import {Header, Icon} from "react-native-elements"

import ProductList from "./containers/productList"
import ImageList from "./containers/imageList"
import CategoryList from "./containers/categoryList"
import GiftList from "./containers/giftList"
import Banner from "./containers/banner"
import SearchBar from "@components/searchbar"
import {useNavigation} from "@react-navigation/native"
import {mainStack} from "@common/navigator"

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.containerHome}>
      {/* Header */}
      <Header
        leftComponent={<SearchBar />}
        backgroundColor={"orange"}
        rightComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate(mainStack.authStack)}
            style={styles.container}>
            <Icon
              name="newspaper-outline"
              type="ionicon"
              color="black"
              size={26}
            />
          </TouchableOpacity>
        }
      />
      <ProductList>
        <Banner />
        {/* gift list */}
        <GiftList />
        {/* categorylist */}
        <CategoryList />
        {/* list image */}
        <ImageList />
      </ProductList>
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
