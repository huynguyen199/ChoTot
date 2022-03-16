import {View, ScrollView, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import {Header, Icon} from "react-native-elements"

import ProductList from "./containers/productList"
import ImageList from "./containers/imageList"
import CategoryList from "./containers/categoryList"
import GiftList from "./containers/giftList"
import Banner from "./containers/banner"
import SearchBar from "@components/searchbar"
// import {Banner} from "@containers/banner"
import {useNavigation} from "@react-navigation/native"
import {mainStack} from "@common/navigator"
import VirtualizedView from "../../components/virtualizedView"

const Home = () => {
  const navigation = useNavigation()
  // dispatch(login({email: "test1@gmail.com", password: "123456"}))
  // const user = useSelector((state) => state.auth)

  // console.log(Config.API_URL)
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
      <VirtualizedView>
        <ScrollView>
          <View>
            <Banner />
            {/* gift list */}
            <GiftList />
            {/* categorylist */}
            <CategoryList />
            {/* list image */}
            <ImageList />
            {/* product list */}
            <ProductList />
          </View>
        </ScrollView>
      </VirtualizedView>
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
