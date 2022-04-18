import {View, StyleSheet, TouchableOpacity} from "react-native"
import React from "react"
import {Header, Icon} from "react-native-elements"

import ProductList from "./components/productList"
import CategoryList from "./components/categoryList"
import Banner from "./components/banner"
import {useState} from "react"
import LeftHeader from "./components/leftHeader"
import {useNavigation} from "@react-navigation/native"
import {mainStack} from "@common/navigator"

const Home = () => {
  const [search, setSearch] = useState("")
  const navigation = useNavigation()
  return (
    <View style={styles.containerHome}>
      {/* Header */}
      <Header
        leftComponent={<LeftHeader search={search} setSearch={setSearch} />}
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
        {/* <GiftList /> */}
        <CategoryList />
        {/* <ImageList /> */}
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
